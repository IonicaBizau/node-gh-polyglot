## Documentation

You can see below the API reference of this module.

### `GhPolyglot(input, token, host)`
Creates a new instance of `GhPolyglot`.

#### Params

- **String** `input`: The repository full name (e.g. `"IonicaBizau/gh-polyglot"`) or the username (e.g. `"IonicaBizau"`).
- **String** `token`: An optional GitHub token used for making authenticated requests.
- **String** `host`: An optional alternative Github FQDN (e.g. `"https://github.myenterprise.com/api/v3/"`)

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

