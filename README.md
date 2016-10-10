
[![gh-polyglot](http://i.imgur.com/wQ2eGDb.png)](#)

# gh-polyglot

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][paypal-donations] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/gh-polyglot.svg)](https://www.npmjs.com/package/gh-polyglot) [![Downloads](https://img.shields.io/npm/dt/gh-polyglot.svg)](https://www.npmjs.com/package/gh-polyglot) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Get language stats about GitHub users and repositories.

## :cloud: Installation

```sh
$ npm i --save gh-polyglot
```



Using this library on the client side is possible as well, but it's dependent on [`gh.js`](https://github.com/IonicaBizau/gh.js).

```html
<script src="path/to/gh.js"></script>
<script src="path/to/gh-polyglot.js"></script>
```

## :clipboard: Example



```js
// Dependencies
var GhPolyglot = require("gh-polyglot");

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

## :memo: Documentation


### `GhPolyglot(input, token)`
Creates a new instance of `GhPolyglot`.

#### Params
- **String** `input`: The repository full name (e.g. `"IonicaBizau/gh-polyglot"`) or the username (e.g. `"IonicaBizau"`).
- **String** `token`: An optional GitHub token used for making authenticated requests.

#### Return
- **GhPolyglot** The `GhPolyglot` instance.

### `getAllRepos(callback)`
Gets all user's repositories.

#### Params
- **Function** `callback`: The callback function.

#### Return
- **Request** The request object.

### `repoStats(callback)`
Gets repository stats.

#### Params
- **Function** `callback`: The callback function.

#### Return
- **Request** The request object.

### `userStats(callback)`
Gets user stats.

#### Params
- **Function** `callback`: The callback function.

#### Return
- **Request** The request object.

### `check(callback)`
Wraps the callback in another function to manipulate the data.

#### Params
- **Function** `callback`: The callback function.

#### Return
- **Function** The wrapping function which gets the `err` and `data` arguments and changes the data converting it into an array.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`github-stats`](https://github.com/IonicaBizau/github-stats)—Visualize stats about GitHub users and projects in your terminal.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
