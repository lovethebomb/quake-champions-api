function match() {
    const endpoint = '/Player/Games';
    return {
        get: async (matchId, playername = false) => {
            if (!matchId) {
                throw new Error('match/get requires a matchId');
            }

            const query = `?id=${matchId}${playername ? `&playerName=${playername}` : ''}`;
            const url = `${endpoint}${query}`
            return this.request(url)
                .then(data => this.toJson(data));
        }
    }
}

module.exports = match;