const QuakeChampionsClient = require('../index.js');

describe('Client/Match/get', () => {
    const client = new QuakeChampionsClient();
    const TEST_MATCH_ID = "fef7a11a-6f62-11e8-87c5-0003ffb6e92f"
    const TEST_MATCH_EXPECTATIONS = {
        mapName: "bloodrun",
        id: TEST_MATCH_ID
    }

    test('should throw if missing matchId', async () => {
        expect.assertions(1);
        try {
            await client.match.get();
        } catch (e) {
            expect(e.message).toBe('match/get requires a matchId')
        }
    });

    test('should be able to fetch match data', async () => {
        expect.assertions(1);
        const match = await client.match.get(TEST_MATCH_ID);
        expect(match).toMatchObject(TEST_MATCH_EXPECTATIONS);
    });
})