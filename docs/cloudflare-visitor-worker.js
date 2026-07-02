const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Cache-Control": "no-store"
};

const DATA_KEY = "visitor-map:data";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: CORS_HEADERS });
    }

    if (!env.VISITOR_STATS) {
      return json({ error: "Missing VISITOR_STATS KV binding" }, 500);
    }

    if (url.pathname === "/visit") {
      const data = await recordVisit(request, env);
      return json(data);
    }

    if (url.pathname === "/data" || url.pathname === "/") {
      const data = await readData(env);
      return json(data);
    }

    return json({ error: "Not found" }, 404);
  }
};

async function recordVisit(request, env) {
  const cf = request.cf || {};
  const lat = Number(cf.latitude);
  const lon = Number(cf.longitude);
  const country = cf.country || "Unknown";
  const city = cf.city || cf.region || country;
  const label = city === country ? country : `${city}, ${country}`;

  const visitorKey = await dailyVisitorKey(request, cf);
  const seen = await env.VISITOR_STATS.get(visitorKey);
  const data = await readData(env);

  if (!seen) {
    data.total += 1;

    if (Number.isFinite(lat) && Number.isFinite(lon)) {
      const locationKey = `${label}|${lat.toFixed(3)}|${lon.toFixed(3)}`;
      let item = data.locations.find((entry) => entry.key === locationKey);
      if (!item) {
        item = { key: locationKey, label, country, lat, lon, count: 0 };
        data.locations.push(item);
      }
      item.count += 1;
    }

    data.locations.sort((a, b) => b.count - a.count);
    data.locations = data.locations.slice(0, 120);
    data.updatedAt = new Date().toISOString();

    await env.VISITOR_STATS.put(visitorKey, "1", { expirationTtl: 86400 });
    await env.VISITOR_STATS.put(DATA_KEY, JSON.stringify(data));
  }

  return data;
}

async function readData(env) {
  const stored = await env.VISITOR_STATS.get(DATA_KEY, "json");
  return stored || {
    total: 0,
    updatedAt: null,
    locations: []
  };
}

async function dailyVisitorKey(request, cf) {
  const ip = request.headers.get("CF-Connecting-IP") || "";
  const ua = request.headers.get("User-Agent") || "";
  const date = new Date().toISOString().slice(0, 10);
  const raw = `${date}|${ip}|${ua}|${cf.country || ""}|${cf.city || ""}`;
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(raw));
  const hash = [...new Uint8Array(digest)]
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
  return `visitor-map:seen:${hash}`;
}

function json(payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      ...CORS_HEADERS,
      "Content-Type": "application/json; charset=utf-8"
    }
  });
}
