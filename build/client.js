// This file generates the client script
// Dependencies
var Fs = require("fs")
  , GitHubColors = require("github-colors")
  , UglifyJS = require("uglify-js")
  ;

const TEMPLATE = "(function (root) {\n"
               + "  var GitHubColors = __GITHUB_COLORS__;\n"
               + "  __GITHUB_POLYGLOT__\n"
               + "})(window);";

// Configurations
GitHubColors.init();

var ghPolyglot = Fs.readFileSync(__dirname + "/../lib/index.js", "utf-8")
  , lines = ghPolyglot.split("\n")
  , replace = {
        __GITHUB_POLYGLOT__: lines.slice(lines.indexOf("/**")).join("\n")
      , __GITHUB_COLORS__: "{ get: " + GitHubColors.get.toString() + ",\n"
                         + "colors: " + JSON.stringify(GitHubColors.colors) + "}"
    }
  , client = TEMPLATE
  ;

Object.keys(replace).forEach(function (c) {
    client = client.replace(new RegExp(c), replace[c]);
});

client = client.replace("module.exports = ", "root.GitHubPolyglot = ");
client = client.replace("this.init();", "");

Fs.writeFileSync(__dirname + "/../dist/gh-polyglot.js", client);
Fs.writeFileSync(__dirname + "/../dist/gh-polyglot.min.js", UglifyJS.minify(client, { fromString: true }).code);
