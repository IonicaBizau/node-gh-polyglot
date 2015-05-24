// Dependencies
var GhPolyglot = require("../lib");

// Stats about git-stats
var me = new GhPolyglot("IonicaBizau/git-stats");

// Repository stats
me.repoStats(function (err, stats) {
    console.log(err || stats);
});

// User stats
me.userStats(function (err, stats) {
    console.log(err || stats);
});
