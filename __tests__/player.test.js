const QuakeChampionsClient = require('../index.js');

describe('Client/Player/get', () => {
    const client = new QuakeChampionsClient();
    const TEST_MATCH_PLAYERNAME = "lovethebomb";

    test('should throw if missing playername', async () => {
        expect.assertions(1);
        try {
            await client.player.get();
        } catch (e) {
            expect(e.message).toBe('player/get requires a playername')
        }
    });

    test('should be able to fetch data for playername lovethebomb', async () => {
        expect.assertions(1);
        const player = await client.player.get(TEST_MATCH_PLAYERNAME);
        expect(player.name).toBe(TEST_MATCH_PLAYERNAME);
    });
})