function player() {
    const endpoint = '/Player/Stats';
    return {
        get: async (playername) => {
            if (!playername) {
                throw new Error('player/get requires a playername');
            }

            const query = `?name=${playername}`;
            const url = `${endpoint}${query}`
            return this.request(url)
                .then(data => this.toJson(data));
        }
    }
}

module.exports = player;