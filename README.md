![](http://i.imgur.com/wQ2eGDb.png)


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
