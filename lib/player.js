function player() {
    const endpoint = '/Player/Stats';
    return {
        get: async (username) => {
            if (!username) {
                throw new Error('player/get requires a username');
            }

            const query = `?name=${username}`;
            const url = `${endpoint}${query}`
            return this.request(url)
                .then(data => this.toJson(data));
        }
    }
}

module.exports = player;