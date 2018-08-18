function leaderboard() {
    const endpoint = '/Leaderboard';
    return {
        get: async (board, season = 'current', from = 0) => {
            if (!board) {
                throw new Error('leaderboard/get requires a board type (duel/tdm)');
            }

            const query = `?from=${from}&season=${season}&board=${board}`;
            const url = `${endpoint}${query}`
            return this.request(url)
                .then(data => this.toJson(data));
        }
    }
}

module.exports = leaderboard;