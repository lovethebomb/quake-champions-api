# quake-champions-api

[![Build Status](https://travis-ci.com/lovethebomb/quake-champions-api.svg?branch=master)](https://travis-ci.com/lovethebomb/quake-champions-api)

This is an unofficial JS client for the [Quake Champions](quake-website) API, provided from [stats.quake.com][quake-stats] website.

This project shouldn't be used in production as no official developer access has been provided to the Quake Champions API, thus it mainly map the calls seen from the [stats.quake.com][quake-stats] page, and the current API calls might not work in the future.

## Installation

```bash
npm i
```

## Usage

### Quick example

```javascript
const QuakeChampionsClient = require('quake-champions-api');

const client = new QuakeChampionsClient();

async function getData() {
    // Fetch player
    const player = await client.player.get('lovethebomb');

    console.debug('Player data', player)
    console.debug('Duel SR', player.playerRatings.duel.rating)
}
```

## Documentation

- [Player](#player)
- [Match](#match)
- [GamesSummary](#gamessummary)
- [Leaderboard](#leaderboard)

### Player

#### get(playername)

Retrieve a player data for a given `playername`.

Returns JSON from the API.

```javascript
const client = new QuakeChampionsClient();

async function getPlayer() {
    const player = await client.player.get('my-playername');
}
```

### Match

#### get(matchId, playername)

Retrieve a match data for a given `matchId`.

Allows an optional `playername` argument, which adds more information to the response.

Returns JSON from the API.

```javascript
const client = new QuakeChampionsClient();

async function getMatch() {
    const match = await client.match.get('match-id-1234abc');
}

async function getMatchWithPlayerSummary() {
    const match = await client.match.get('match-id-1234abc', 'my-playername');
}
```

### GamesSummary

#### get(playername)

Retrieve a GamesSummary data for a given `playername`.

Returns JSON from the API.

```javascript
const client = new QuakeChampionsClient();

async function getGamesSummary() {
    const gamesSummary = await client.gamesSummary.get('my-playername');
}
```

### Leaderboard

#### get(board, season, from)

Retrieve a Leaderboard data for a given `board` type.

Board can be `duel` or `tdm`.

Allows an optional `season` argument, which defaults to `current`.

Allows an optional `from` argument, for pagination, which defaults to `0`.

Returns JSON from the API.

```javascript
const client = new QuakeChampionsClient();

async function getDuelLeaderboard() {
    const leaderboard = await client.leaderboard.get('duel');
}
```

## Testing

```bash
npm run test
```

## License

MIT

TODO Trademarks QUAKE™, id Software™, Bethesda™, Bethesda Softworks™, ZeniMax™

[quake-stats]: https://stats.quake.com
[quake-website]: https://quake.bethesda.net