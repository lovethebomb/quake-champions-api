function player() {
    this._endpoint = '/Player/Stats';
    return {
        get: async (username) => {
            if (!username) {
                throw new Error('player/get requires a username');
            }

            const query = `?name=${username}`;
            const url = `${this._endpoint}${query}`
            return this.request(url)
                .then(data => this.toJson(data));
        }
    }
}

module.exports = player;