const QuakeChampionsClient = require('../index.js');
const constants = require('../lib/constants.js');

describe('Client/Leaderboard', () => {
    const client = new QuakeChampionsClient();
    const TEST_BOARD_TDM = constants.BOARD_TDM;
    const TEST_TDM = {
        boardType: TEST_BOARD_TDM,
        entries: expect.any(Array),
        totalEntries: expect.any(Number)
    };
    const TEST_BOARD_DUEL = constants.BOARD_DUEL;
    const TEST_DUEL = {
        boardType: TEST_BOARD_DUEL,
        entries: expect.any(Array),
        totalEntries: expect.any(Number)
    };

    test('should throw if missing board type', async () => {
        expect.assertions(1);
        try {
            await client.leaderboard.get();
        } catch (e) {
            expect(e.message).toBe('leaderboard/get requires a board type (duel/tdm)')
        }
    });

    test('should be able to fetch default data for board type tdm', async () => {
        expect.assertions(1);
        const gamesSummary = await client.leaderboard.get(TEST_BOARD_TDM);
        expect(gamesSummary).toEqual(expect.objectContaining(TEST_TDM));
    });

    test('should be able to fetch default data for board type duel', async () => {
        expect.assertions(1);
        const gamesSummary = await client.leaderboard.get(TEST_BOARD_DUEL);
        expect(gamesSummary).toEqual(expect.objectContaining(TEST_DUEL));
    });
})