const fetch = require('isomorphic-unfetch');

const player = require('./lib/player');

const API_URL = "https://stats.quake.com/api/";
const API_VERSION = "v2";

class QuakeChampionsClient {
    constructor({ apiUrl, apiVersion } = {}) {
        this._apiUrl = apiUrl || API_URL;
        this._apiVersion = apiVersion || API_VERSION;
        this._apiEndpoint = `${this._apiUrl}${this._apiVersion}`;

        this.player = player.bind(this)();
    }

    async request(url, options) {
        const request = `${this._apiEndpoint}${url}`;
        return fetch(request).catch(console.error)
    }

    toJson(res) {
        return typeof res.json === "function" ? res.json() : res;
    }
}

module.exports = QuakeChampionsClient;