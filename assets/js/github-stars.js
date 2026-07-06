(function () {
  var STAR_THRESHOLD = 50;

  function parseRepo(url) {
    try {
      var parsed = new URL(url);
      if (parsed.hostname !== "github.com") {
        return null;
      }

      var parts = parsed.pathname.split("/").filter(Boolean);
      if (parts.length < 2) {
        return null;
      }

      return parts[0] + "/" + parts[1].replace(/\.git$/, "");
    } catch (error) {
      return null;
    }
  }

  function renderStars(buttons, stars) {
    if (!Number.isFinite(stars) || stars < STAR_THRESHOLD) {
      return;
    }

    Array.prototype.forEach.call(buttons, function (button) {
      if (!button.dataset.originalHtml) {
        button.dataset.originalHtml = button.innerHTML.trim();
      }
      button.innerHTML = button.dataset.originalHtml +
        ' <span class="github-star-count" aria-label="' + stars + ' GitHub stars">★ ' +
        stars.toLocaleString("en-US") +
        "</span>";
    });
  }

  function initGitHubStars() {
    var codeButtons = document.querySelectorAll("a.btn-code[href]");
    var buttonsByRepo = {};

    Array.prototype.forEach.call(codeButtons, function (button) {
      var repo = parseRepo(button.href);
      if (!repo) {
        return;
      }

      if (!buttonsByRepo[repo]) {
        buttonsByRepo[repo] = [];
      }
      buttonsByRepo[repo].push(button);
    });

    if (!Object.keys(buttonsByRepo).length || !window.githubStarStatsUrl) {
      return;
    }

    fetch(window.githubStarStatsUrl)
      .then(function (response) {
        if (!response.ok) {
          throw new Error("GitHub star data request failed");
        }
        return response.json();
      })
      .then(function (data) {
        Object.keys(buttonsByRepo).forEach(function (repo) {
          renderStars(buttonsByRepo[repo], Number(data[repo]));
        });
      })
      .catch(function () {
        return;
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initGitHubStars);
  } else {
    initGitHubStars();
  }
})();
