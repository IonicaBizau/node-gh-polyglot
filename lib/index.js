// Dependencies
var JsonRequest = require("jsonrequest")
  , GitHubColors = require("github-colors")
  ;

function GhPolyglot (input, token, callback) {
    var splits = input.split("/");
    this.user = splits[0];
    this.repo = splits[1];
}

GhPolyglot.prototype.getAllRepos = function (page, repos, callback) {
    var self = this;
    if (typeof page === "function") {
        callback = page;
        page = null;
    }
    page = page || 1;
    repos = repos || [];
    return JsonRequest("https://api.github.com/users/" + self.user + "/repos?per_page=100&page=" + page, function (err, newRepos, res) {

        if (err) {
            return callback(err);
        }

        if (res.statusCode) {
            return callback(Object(newRepos).message || "An error ocured.");
        }

        if (newRepos.length) {
            return self.getAllRepos(++page, repos.concat(newRepos), callback);
        }

        repos = repos.filter(function (c) {
            return !c.fork;
        });

        if (!repos.length) {
            callback(new Error("This user doesn't have any repositories."));
        }

        callback(null, repos);
    });
};

GhPolyglot.prototype.repoStats = function (callback) {
    return JsonRequest("https://api.github.com/repos/" + this.user + "/" + this.repo + "/languages", this.check(callback));
};

GhPolyglot.prototype.userStats = function (callback) {
    return this.getAllRepos(this.check(callback));
};

GhPolyglot.prototype.check = function (callback) {
    return function (err, data, res) {
        if (err) { return callback(err); }
        if (data && data.message) {
            return callback(new Error(data.message));
        }

        if (res.statusCode !== 200) {
            return callback(new Error("An error ocured."));
        }

        var languages = {}
          , arrData = []
          ;

        if (Array.isArray(data)) {
            data.forEach(function (c) {
                languages[c.language] = languages[c.language] || 0;
                ++languages[c.language];
            });

            if (languages["null"]) {
                languages.Others = languages["null"];
                delete languages["null"];
            }

        } else {
            languages = data;
        }

        arrData = Object.keys(languages).map(function (cLang) {
            return {
                label: cLang
              , value: languages[cLang]
              , color: GitHubColors.get(cLang)
            };
        });

        callback(null, arrData.sort(function (a, b) {
            return a.value < b.value ? 1 : -1;
        }));
    };
};


module.exports = GhPolyglot;
