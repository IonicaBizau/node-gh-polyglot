var GhPolyglot = require("../lib");

var me = new GhPolyglot("IonicaBizau/bat");
me.repoStats(function (err, stats) {
    if (err) { return console.log(err); }
    console.log("Repo stats: ", stats);
});

me.userStats(function (err, stats) {
    if (err) { return console.log(err); }
    console.log("Repo stats: ", stats);
});
