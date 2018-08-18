const QuakeChampionsClient = require('../index.js');

describe('Client/GamesSummary', () => {
    const client = new QuakeChampionsClient();
    const TEST_MATCH_PLAYERNAME = "lovethebomb";
    const TEST_GAMESSUMMARY = {
        "id": "7258a90b-a28f-11e8-bce6-0003ffb6be63",
        "time": "2018-08-18T02:36:01.7236235Z",
        "mapName": "fortress_of_the_deep",
        "rank": 2,
        "score": null,
        "gameMode": "FFA",
        "won": true,
        "xp": 2639,
        "kdr": 1.6666666666666667,
        "totalDamage": 5680,
        "weaponAccuracy": {
            "GAUNTLET": 0,
            "MACHINEGUN": 23.976608187134502,
            "MACHINEGUN_GRADE1": 34.66666666666667,
            "SHOTGUN": 0,
            "SHOTGUN_GRADE1": 75,
            "NAILGUN": 0,
            "NAILGUN_GRADE1": 0,
            "ROCKET_LAUNCHER": 43.82022471910113,
            "LIGHTNING_GUN": 39.726027397260275,
            "RAILGUN": 58.333333333333336,
            "LAGBOLT": 0
        }
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