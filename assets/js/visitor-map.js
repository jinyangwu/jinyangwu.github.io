(function () {
  var card = document.querySelector(".visitor-map-card");
  if (!card) return;

  var totalEl = document.getElementById("visitor-total");
  var statusEl = document.getElementById("visitor-status");
  var pointsEl = document.getElementById("visitor-points");
  var listEl = document.getElementById("visitor-list");
  var endpoint = (card.getAttribute("data-visitor-endpoint") || "").replace(/\/+$/, "");
  var isLocalPreview = ["localhost", "127.0.0.1", ""].indexOf(window.location.hostname) !== -1;

  var previewData = {
    total: 128,
    locations: [
      { label: "Beijing, China", country: "China", lat: 39.9042, lon: 116.4074, count: 46 },
      { label: "Shanghai, China", country: "China", lat: 31.2304, lon: 121.4737, count: 18 },
      { label: "Hong Kong", country: "Hong Kong", lat: 22.3193, lon: 114.1694, count: 11 },
      { label: "Singapore", country: "Singapore", lat: 1.3521, lon: 103.8198, count: 9 },
      { label: "San Diego, United States", country: "United States", lat: 32.7157, lon: -117.1611, count: 14 },
      { label: "London, United Kingdom", country: "United Kingdom", lat: 51.5072, lon: -0.1276, count: 7 },
      { label: "Tokyo, Japan", country: "Japan", lat: 35.6762, lon: 139.6503, count: 8 },
      { label: "Sydney, Australia", country: "Australia", lat: -33.8688, lon: 151.2093, count: 5 },
      { label: "Berlin, Germany", country: "Germany", lat: 52.52, lon: 13.405, count: 4 },
      { label: "Toronto, Canada", country: "Canada", lat: 43.6532, lon: -79.3832, count: 6 }
    ]
  };

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function setStatus(text, state) {
    statusEl.textContent = text;
    statusEl.classList.remove("is-preview", "is-offline");
    if (state) statusEl.classList.add(state);
  }

  function normalize(payload) {
    var locations = payload.locations || payload.regions || payload.cities || [];
    locations = locations
      .map(function (item) {
        var lat = Number(item.lat || item.latitude);
        var lon = Number(item.lon || item.lng || item.longitude);
        var count = Number(item.count || item.visits || item.value || 1);
        var label = item.label || item.city || item.region || item.country || "Unknown";
        if (!Number.isFinite(lat) || !Number.isFinite(lon)) return null;
        return {
          label: label,
          country: item.country || label,
          lat: lat,
          lon: lon,
          count: Number.isFinite(count) ? count : 1
        };
      })
      .filter(Boolean)
      .sort(function (a, b) { return b.count - a.count; });

    var total = Number(payload.total || payload.totalVisits || payload.visits);
    if (!Number.isFinite(total)) {
      total = locations.reduce(function (sum, item) { return sum + item.count; }, 0);
    }

    return { total: total, locations: locations };
  }

  function render(payload, mode) {
    var data = normalize(payload);
    totalEl.textContent = data.total.toLocaleString();
    pointsEl.innerHTML = "";
    listEl.innerHTML = "";

    var maxCount = data.locations.reduce(function (max, item) {
      return Math.max(max, item.count);
    }, 1);

    data.locations.slice(0, 60).forEach(function (item) {
      var x = clamp((item.lon + 180) / 360 * 100, 2, 98);
      var y = clamp((90 - item.lat) / 180 * 100, 4, 96);
      var size = 8 + Math.sqrt(item.count / maxCount) * 13;
      var dot = document.createElement("span");
      dot.className = "visitor-dot";
      dot.style.left = x + "%";
      dot.style.top = y + "%";
      dot.style.setProperty("--dot-size", size.toFixed(1) + "px");
      dot.title = item.label + " · " + item.count + " visits";
      pointsEl.appendChild(dot);
    });

    data.locations.slice(0, 8).forEach(function (item) {
      var chip = document.createElement("span");
      chip.className = "visitor-chip";
      chip.textContent = item.label + " · " + item.count;
      listEl.appendChild(chip);
    });

    if (mode === "live") {
      setStatus("Live", "");
    } else if (mode === "preview") {
      setStatus("Preview data", "is-preview");
    } else {
      setStatus("Offline", "is-offline");
    }
  }

  function request(path, options) {
    options = options || {};
    var timeoutMs = options.timeoutMs || 2500;
    var controller = new AbortController();
    var timer = setTimeout(function () {
      controller.abort();
    }, timeoutMs);
    delete options.timeoutMs;

    return fetch(endpoint + path, Object.assign({
      mode: "cors",
      cache: "no-store",
      signal: controller.signal
    }, options)).finally(function () {
      clearTimeout(timer);
    });
  }

  async function load() {
    if (!endpoint) {
      render(previewData, "preview");
      return;
    }

    try {
      await request("/visit", {
        method: "POST",
        keepalive: true
      }).catch(function () {});

      var response = await request("/data");
      if (!response.ok) throw new Error("visitor endpoint returned " + response.status);

      var payload = await response.json();
      render(payload, "live");
    } catch (error) {
      render(isLocalPreview ? previewData : { total: 0, locations: [] }, isLocalPreview ? "preview" : "offline");
      card.setAttribute("data-visitor-error", error.message);
    }
  }

  load();
})();
