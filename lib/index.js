// Dependencies
var GitHubColors = require("github-colors")
  , GitHub = require("gh.js")
  ;

/**
 * GhPolyglot
 * Creates a new instance of `GhPolyglot`.
 *
 * @name GhPolyglot
 * @function
 * @param {String} input The repository full name
 * (e.g. `"IonicaBizau/gh-polyglot"`) or the username (e.g. `"IonicaBizau"`).
 * @param {String} token An optional GitHub token used for making
 * authenticated requests.
 * @return {GhPolyglot} The `GhPolyglot` instance.
 */
function GhPolyglot (input, token) {
    var splits = input.split("/");
    this.user = splits[0];
    this.repo = splits[1];
    this.full_name = input;
    this.gh = new GitHub({ token: token });
}

/**
 * getAllRepos
 * Gets all user's repositories.
 *
 * @name getAllRepos
 * @function
 * @param {Function} callback The callback function.
 * @return {Request} The request object.
 */
GhPolyglot.prototype.getAllRepos = function (callback) {
    var self = this;
    return self.gh.get("users/" + self.user + "/repos", {
        all: true
    }, function (err, repos) {

        if (err) {
            return callback(err);
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

/**
 * repoStats
 * Gets repository stats.
 *
 * @name repoStats
 * @function
 * @param {Function} callback The callback function.
 * @return {Request} The request object.
 */
GhPolyglot.prototype.repoStats = function (callback) {
    return this.gh.get("repos/" + this.full_name + "/languages", this.check(callback));
};

/**
 * userStats
 * Gets user stats.
 *
 * @name userStats
 * @function
 * @param {Function} callback The callback function.
 * @return {Request} The request object.
 */
GhPolyglot.prototype.userStats = function (callback) {
    return this.getAllRepos(this.check(callback));
};

/**
 * check
 * Wraps the callback in another function to manipulate the data.
 *
 * @name check
 * @function
 * @param {Function} callback The callback function.
 * @return {Function} The wrapping function which gets the `err` and `data`
 * arguments and changes the data converting it into an array.
 */
GhPolyglot.prototype.check = function (callback) {
    return function (err, data, res) {
        if (err) { return callback(err); }

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
              , color: GitHubColors.get(cLang).color
            };
        });

        callback(null, arrData.sort(function (a, b) {
            return a.value < b.value ? 1 : -1;
        }));
    };
};

module.exports = GhPolyglot;
