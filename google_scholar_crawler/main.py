import json
import os
import sys
from datetime import datetime
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode
from urllib.request import Request, urlopen


SERPAPI_ENDPOINT = "https://serpapi.com/search.json"


def require_env(name):
    value = os.environ.get(name)
    if not value:
        raise RuntimeError(f"{name} is required")
    return value


def as_int(value, default=0):
    try:
        return int(value)
    except (TypeError, ValueError):
        return default


def metric_all(table, metric_names):
    for row in table:
        for name in metric_names:
            values = row.get(name)
            if isinstance(values, dict) and "all" in values:
                return as_int(values.get("all"))
    return 0


def fetch_serpapi_author(author_id, api_key):
    params = urlencode(
        {
            "engine": "google_scholar_author",
            "author_id": author_id,
            "hl": "en",
            "num": "100",
            "api_key": api_key,
        }
    )
    request = Request(f"{SERPAPI_ENDPOINT}?{params}", headers={"User-Agent": "jinyangwu.github.io citation updater"})

    try:
        with urlopen(request, timeout=90) as response:
            payload = json.load(response)
    except HTTPError as error:
        raise RuntimeError(f"SerpApi request failed with HTTP {error.code}") from error
    except URLError as error:
        raise RuntimeError(f"SerpApi request failed: {error.reason}") from error

    status = payload.get("search_metadata", {}).get("status")
    if status and status != "Success":
        raise RuntimeError(payload.get("error") or f"SerpApi search status: {status}")
    if "error" in payload:
        raise RuntimeError(payload["error"])

    return payload


def convert_to_scholarly_shape(payload, author_id):
    author_info = payload.get("author", {})
    cited_by = payload.get("cited_by", {})
    cited_by_table = cited_by.get("table", [])
    cited_by_graph = cited_by.get("graph", [])

    publications = {}
    for article in payload.get("articles", []):
        citation_id = article.get("citation_id")
        if not citation_id:
            continue

        cited_by_info = article.get("cited_by") or {}
        publications[citation_id] = {
            "container_type": "Publication",
            "source": "SERPAPI_GOOGLE_SCHOLAR_AUTHOR",
            "bib": {
                "title": article.get("title", ""),
                "pub_year": str(article.get("year", "")),
                "author": article.get("authors", ""),
                "citation": article.get("publication", ""),
            },
            "filled": False,
            "author_pub_id": citation_id,
            "num_citations": as_int(cited_by_info.get("value")),
            "citedby_url": cited_by_info.get("link"),
        }

    citations_all = metric_all(cited_by_table, ["citations"])
    h_index = metric_all(cited_by_table, ["h_index", "indice_h"])
    i10_index = metric_all(cited_by_table, ["i10_index", "indice_i10"])

    return {
        "container_type": "Author",
        "filled": ["basics", "publications", "indices", "counts"],
        "scholar_id": author_id,
        "source": "SERPAPI_GOOGLE_SCHOLAR_AUTHOR",
        "name": author_info.get("name", ""),
        "affiliation": author_info.get("affiliations", ""),
        "interests": [item.get("title", "") for item in author_info.get("interests", []) if item.get("title")],
        "email_domain": author_info.get("email", ""),
        "homepage": author_info.get("website", ""),
        "citedby": citations_all,
        "publications": publications,
        "hindex": h_index,
        "i10index": i10_index,
        "cites_per_year": {str(item.get("year")): as_int(item.get("citations")) for item in cited_by_graph},
        "updated": str(datetime.now()),
    }


def write_results(author):
    os.makedirs("results", exist_ok=True)
    with open("results/gs_data.json", "w") as outfile:
        json.dump(author, outfile, ensure_ascii=False)

    shieldio_data = {
        "schemaVersion": 1,
        "label": "citations",
        "message": f"{author['citedby']}",
    }
    with open("results/gs_data_shieldsio.json", "w") as outfile:
        json.dump(shieldio_data, outfile, ensure_ascii=False)


def main():
    author_id = require_env("GOOGLE_SCHOLAR_ID")
    api_key = require_env("SERPAPI_KEY")
    payload = fetch_serpapi_author(author_id, api_key)
    author = convert_to_scholarly_shape(payload, author_id)
    print(json.dumps({k: author[k] for k in ["scholar_id", "name", "citedby", "updated"]}, indent=2))
    write_results(author)


if __name__ == "__main__":
    try:
        main()
    except Exception as error:
        print(f"Error: {error}", file=sys.stderr)
        sys.exit(1)
