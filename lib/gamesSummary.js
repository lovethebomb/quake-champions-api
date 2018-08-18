function gamesSummary() {
    const endpoint = '/Player/GamesSummary';
    return {
        get: async (playername = false) => {
            if (!playername) {
                throw new Error('gamesSummary/get requires a playername');
            }

            const query = `?name=${playername}`;
            const url = `${endpoint}${query}`
            return this.request(url)
                .then(data => this.toJson(data));
        },
    }
}

module.exports = gamesSummary;