// Dependencies
var GhPolyglot = require("../lib")
  , Pie = require("cli-pie")
  ;

var me = new GhPolyglot("GhitaB/guess-my-number");
me.repoStats(function (err, stats) {
    if (err) { return console.log(err); }
    console.log("Repo stats: ", stats);
    console.log(new Pie(10, stats, {
        legend: true
    }).toString());
});

me.userStats(function (err, stats) {
    if (err) { return console.log(err); }
    console.log("Repo stats: ", stats);
    console.log(new Pie(10, stats, {
        legend: true
    }).toString());
});
