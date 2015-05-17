var JsonRequest = require("jsonrequest");

function GhPolyglot (input, token, callback) {
    var splits = input.split("/");
    this.user = splits[0];
    this.repo = splits[1];
}

GhPolyglot.getAllRepos = function (page, repos, callback) {
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
            return self.getAllRepos(++page, repos.concat(newRepos);, callback);
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

GhPolyglot.getRepoStats = function (callback) {
    var self = this;
    if (typeof page === "function") {
        callback = page;
        page = null;
    }
    return JsonRequest("https://api.github.com/repos/" + self.user + "/" + self.repo + "/languages", function (err, stats, res) {

        if (err) {
            return callback(err);
        }

        if (res.statusCode) {
            return callback(Object(stats).message || "An error ocured.");
        }

        callback(null, stats);
    });
};

GhPolyglot.get = function (callback) {

    function check(err, res) {
        if (err) { return callback(err); }
        var stats = [];
        if (res.constructor === Object) {
            Object.keys(res).forEach(function (c) {

            });
        }
    }

    this.repo
    ? this.getRepoStats(check);
    : this.getAllRepos(check);
};


module.exports = GhPolyglot;
