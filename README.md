[![gh-polyglot](http://i.imgur.com/wQ2eGDb.png)](#)

# gh-polyglot [![Support this project][donate-now]][paypal-donations]
Get language stats about GitHub users and repositories.

## Installation

```sh
$ npm i gh-polyglot
```

Using this library on the client side is possible as well, but it's dependent on [`gh.js`](https://github.com/IonicaBizau/gh.js).

```html
<script src="path/to/gh.js"></script>
<script src="path/to/gh-polyglot.js"></script>
```

## Example

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

## Documentation

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

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`github-stats`](https://github.com/IonicaBizau/github-stats)

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md