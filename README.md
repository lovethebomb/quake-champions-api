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

### Player

#### get(username)

Retrieve a player data for a given `username`.
Returns JSON from the API.

```javascript
const client = new QuakeChampionsClient();

async function getPlayer() {
    const player = await client.player.get('my-username');
}
```

### Match

#### get(matchId)

Retrieve a match data for a given `matchId`.
Returns JSON from the API.

```javascript
const client = new QuakeChampionsClient();

async function getMatch() {
    const match = await client.match.get('match-id-1234abc');
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