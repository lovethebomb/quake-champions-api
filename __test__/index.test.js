const QuakeChampionsClient = require('../index.js');

describe('Client/Player/get', () => {
    const client = new QuakeChampionsClient();

    test('should throw if missing username', async () => {
        expect.assertions(1);
        try {
            await client.player.get();
        } catch (e) {
            expect(e.message).toBe('player/get requires a username')
        }
    });

    test('should be able to fetch data for lovethebomb', async () => {
        expect.assertions(1);
        const player = await client.player.get('lovethebomb');
        expect(player.name).toBe('lovethebomb');
    });
})