#!/usr/bin/env python3
"""Refresh GitHub star counts for code links on the homepage."""

import json
import os
import re
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
ABOUT_MD = ROOT / "_pages" / "about.md"
OUT_JSON = ROOT / "assets" / "star_counts.json"

REPO_PATTERN = re.compile(r"github\.com/([\w.-]+/[\w.-]+)")


def discover_repos():
    text = ABOUT_MD.read_text()
    repos = set()
    for match in REPO_PATTERN.findall(text):
        owner, _, rest = match.partition("/")
        name = rest.split("/")[0].replace(".git", "")
        if owner and name:
            repos.add(f"{owner}/{name}")
    return repos


def load_previous():
    if not OUT_JSON.exists():
        return {}
    try:
        return json.loads(OUT_JSON.read_text())
    except json.JSONDecodeError:
        return {}


def fetch_stars(repo, token):
    request = urllib.request.Request(f"https://api.github.com/repos/{repo}")
    request.add_header("Accept", "application/vnd.github+json")
    request.add_header("X-GitHub-Api-Version", "2022-11-28")
    request.add_header("User-Agent", "jinyangwu-github-star-updater")
    if token:
        request.add_header("Authorization", f"Bearer {token}")

    try:
        with urllib.request.urlopen(request, timeout=15) as response:
            payload = json.loads(response.read().decode())
    except urllib.error.HTTPError as error:
        print(f"  ! HTTP {error.code} for {repo}", file=sys.stderr)
        return None
    except Exception as error:
        print(f"  ! {type(error).__name__} for {repo}: {error}", file=sys.stderr)
        return None

    stars = payload.get("stargazers_count")
    return int(stars) if stars is not None else None


def main():
    repos = discover_repos()
    print(f"discovered {len(repos)} repo(s)")

    data = load_previous()
    token = os.environ.get("GITHUB_TOKEN") or os.environ.get("GH_TOKEN")
    successes = 0

    for repo in sorted(repos):
        stars = fetch_stars(repo, token)
        if stars is None:
            if repo in data:
                print(f"  - {repo}: keeping previous value {data[repo]}")
            else:
                print(f"  - {repo}: no previous value")
        else:
            data[repo] = stars
            print(f"  + {repo}: {stars}")
            successes += 1
        time.sleep(0.2)

    OUT_JSON.parent.mkdir(parents=True, exist_ok=True)
    OUT_JSON.write_text(json.dumps(data, indent=2, sort_keys=True) + "\n")
    print(f"wrote {OUT_JSON} ({successes}/{len(repos)} refreshed)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
