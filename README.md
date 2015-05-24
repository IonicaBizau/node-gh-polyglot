![](http://i.imgur.com/wQ2eGDb.png)

# GitHub Polyglot
Get language stats about GitHub users and repositories.

## Installation

```sh
$ npm install gh-polyglot
```

Using this library on the client side is possible as well, but it's dependent on [`gh.js`](https://github.com/IonicaBizau/gh.js).

```html
<script src="path/to/gh.js"></script>
<script src="path/to/gh-polyglot.js"></script>
```

## Example

```js
// Dependencies
var GhPolyglot = require("../lib");

// Stats about git-stats
var me = new GhPolyglot("IonicaBizau/git-stats");

// Repository stats
me.repoStats(function (err, stats) {
    console.log(err || stats);
    // =>
    // [ { label: 'JavaScript', value: 12777, color: '#f1e05a' },
    //   { label: 'Shell', value: 1947, color: '#89e051' } ]
});

// User stats
me.userStats(function (err, stats) {
    console.log(err || stats);
    // =>
    // [ { label: 'JavaScript', value: 133, color: '#f1e05a' },
    //   { label: 'Others', value: 17, color: '#ccc' },
    //   { label: 'CSS', value: 13, color: '#563d7c' },
    //   { label: 'Shell', value: 8, color: '#89e051' },
    //   { label: 'C#', value: 4, color: '#178600' },
    //   { label: 'HTML', value: 2, color: '#e44b23' },
    //   { label: 'PHP', value: 2, color: '#4F5D95' },
    //   { label: 'C++', value: 1, color: '#f34b7d' },
    //   { label: 'COBOL', value: 1, color: undefined },
    //   { label: 'Java', value: 1, color: '#b07219' },
    //   { label: 'C', value: 1, color: '#555555' },
    //   { label: 'Python', value: 1, color: '#3572A5' } ]
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
1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

## License
See the [LICENSE](./LICENSE) file.
