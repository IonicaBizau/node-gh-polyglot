# 

## Installation

```sh
$ npm i 
```

## Example

```js
// Dependencies
var GhPolyglot = require("undefined");

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
```

## Documentation

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

See the [LICENSE](/LICENSE) file.

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md