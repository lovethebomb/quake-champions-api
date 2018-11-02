const QuakeChampionsClient = require('../index.js');

describe('Client/GamesSummary', () => {
    const client = new QuakeChampionsClient();
    const TEST_MATCH_PLAYERNAME = "lovethebomb";
    const TEST_GAMESSUMMARY = {
        "id": expect.any(String),
        "time": expect.any(String),
        "mapName": expect.any(String),
        "rank": expect.any(Number),
        "score": expect.anything(),
        "gameMode": expect.any(String),
        "won": expect.any(Boolean),
        "xp": expect.any(Number),
        "kdr": expect.any(Number),
        "totalDamage": expect.any(Number),
        "weaponAccuracy": expect.any(Object)
    };

    test('should throw if missing playername', async () => {
        expect.assertions(1);
        try {
            await client.gamesSummary.get();
        } catch (e) {
            expect(e.message).toBe('gamesSummary/get requires a playername')
        }
    });

    test('should be able to fetch data for playername lovethebomb', async () => {
        expect.assertions(1);
        const gamesSummary = await client.gamesSummary.get(TEST_MATCH_PLAYERNAME);
        expect(gamesSummary).toEqual(expect.objectContaining({
            "matches": expect.arrayContaining([
                expect.objectContaining(TEST_GAMESSUMMARY)
            ])
        }));
    });
})