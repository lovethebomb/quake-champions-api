const fetch = require('isomorphic-unfetch');

const rankings = require('./lib/rankings');
const player = require('./lib/player');
const match = require('./lib/match');
const gamesSummary = require('./lib/gamesSummary');
const leaderboard = require('./lib/leaderboard');

const API_URL = "https://quake-stats.bethesda.net/api/";
const API_VERSION = "v2";

class QuakeChampionsClient {
    constructor({ apiUrl, apiVersion } = {}) {
        this._apiUrl = apiUrl || API_URL;
        this._apiVersion = apiVersion || API_VERSION;
        this._apiEndpoint = `${this._apiUrl}${this._apiVersion}`;

        this.rankings = rankings;

        this.player = player.bind(this)();
        this.match = match.bind(this)();
        this.gamesSummary = gamesSummary.bind(this)();
        this.leaderboard = leaderboard.bind(this)();
    }

    async request(url) {
        const request = `${this._apiEndpoint}${url}`;
        return fetch(request).catch((e) => {
            throw new Error(e);
        });
    }

    toJson(res) {
        return typeof res.json === "function" ? res.json() : res;
    }
}

module.exports = QuakeChampionsClient;