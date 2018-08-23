const QuakeChampionsClient = require('../index.js');
const rankings = require('../lib/rankings.js');

describe('Client/Rankings', () => {
    const client = new QuakeChampionsClient();
    const RANKING_UNRANKED = rankings.UNRANKED;
    const RANKING_BRONZE_2 = "BRONZE_2";
    const RANKING_GOLD_1 = "GOLD_1";
    const TEST_PLAYER_RATING_BRONZE_2 = 775;
    const TEST_PLAYER_RATING_GOLD_1 = 1500;

    test('should return UNRANKED', async () => {
        const ranking = client.rankings.ranking();
        expect(ranking).toBe(RANKING_UNRANKED);
    });

    test('should return BRONZE_2', async () => {
        expect.assertions(1);
        const ranking = client.rankings.ranking(TEST_PLAYER_RATING_BRONZE_2);
        expect(ranking).toBe(RANKING_BRONZE_2);
    });

    test('should return GOLD_1', async () => {
        expect.assertions(1);
        const ranking = client.rankings.ranking(TEST_PLAYER_RATING_GOLD_1);
        expect(ranking).toBe(RANKING_GOLD_1);
    });
})