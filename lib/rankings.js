const UNRANKED = null;
const BRONZE_1 = 0;
const BRONZE_2 = 775;
const BRONZE_3 = 850;
const BRONZE_4 = 925;
const BRONZE_5 = 1000;
const SILVER_1 = 1075;
const SILVER_2 = 1150;
const SILVER_3 = 1225;
const SILVER_4 = 1300;
const SILVER_5 = 1375;
const GOLD_1 = 1450;
const GOLD_2 = 1525;
const GOLD_3 = 1600;
const GOLD_4 = 1675;
const GOLD_5 = 1750;
const DIAMOND_1 = 1825;
const DIAMOND_2 = 1900;
const DIAMOND_3 = 1975;
const DIAMOND_4 = 2050;
const DIAMOND_5 = 2125;
const ELITE_1 = 2200;

const rankings = [
    { name: 'ELITE_1', min: ELITE_1 },
    { name: 'DIAMOND_5', min: DIAMOND_5 },
    { name: 'DIAMOND_4', min: DIAMOND_4 },
    { name: 'DIAMOND_3', min: DIAMOND_3 },
    { name: 'DIAMOND_2', min: DIAMOND_2 },
    { name: 'DIAMOND_1', min: DIAMOND_1 },
    { name: 'GOLD_5', min: GOLD_5 },
    { name: 'GOLD_4', min: GOLD_4 },
    { name: 'GOLD_3', min: GOLD_3 },
    { name: 'GOLD_2', min: GOLD_2 },
    { name: 'GOLD_1', min: GOLD_1 },
    { name: 'SILVER_5', min: SILVER_5 },
    { name: 'SILVER_4', min: SILVER_4 },
    { name: 'SILVER_3', min: SILVER_3 },
    { name: 'SILVER_2', min: SILVER_2 },
    { name: 'SILVER_1', min: SILVER_1 },
    { name: 'BRONZE_5', min: BRONZE_5 },
    { name: 'BRONZE_4', min: BRONZE_4 },
    { name: 'BRONZE_3', min: BRONZE_3 },
    { name: 'BRONZE_2', min: BRONZE_2 },
    { name: 'BRONZE_1', min: BRONZE_1 }
];

function ranking(rating) {
    for (let ranking, i = 0, l = rankings.length; i < l; i++) {
        ranking = rankings[i];
        if (rating >= ranking.min) {
            return ranking.name;
        }
    }
    return UNRANKED;
}

module.exports = {
    rankings,
    ranking,
    ELITE_1,
    DIAMOND_5,
    DIAMOND_4,
    DIAMOND_3,
    DIAMOND_2,
    DIAMOND_1,
    GOLD_5,
    GOLD_4,
    GOLD_3,
    GOLD_2,
    GOLD_1,
    SILVER_5,
    SILVER_4,
    SILVER_3,
    SILVER_2,
    SILVER_1,
    BRONZE_5,
    BRONZE_4,
    BRONZE_3,
    BRONZE_2,
    BRONZE_1,
    UNRANKED
};