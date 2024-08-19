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
    { name: 'Elite_01', min: ELITE_1 },
    { name: 'Diamond_05', min: DIAMOND_5 },
    { name: 'Diamond_04', min: DIAMOND_4 },
    { name: 'Diamond_03', min: DIAMOND_3 },
    { name: 'Diamond_02', min: DIAMOND_2 },
    { name: 'Diamond_01', min: DIAMOND_1 },
    { name: 'Gold_05', min: GOLD_5 },
    { name: 'Gold_04', min: GOLD_4 },
    { name: 'Gold_03', min: GOLD_3 },
    { name: 'Gold_02', min: GOLD_2 },
    { name: 'Gold_01', min: GOLD_1 },
    { name: 'Silver_05', min: SILVER_5 },
    { name: 'Silver_04', min: SILVER_4 },
    { name: 'Silver_03', min: SILVER_3 },
    { name: 'Silver_02', min: SILVER_2 },
    { name: 'Silver_01', min: SILVER_1 },
    { name: 'Bronze_05', min: BRONZE_5 },
    { name: 'Bronze_04', min: BRONZE_4 },
    { name: 'Bronze_03', min: BRONZE_3 },
    { name: 'Bronze_02', min: BRONZE_2 },
    { name: 'Bronze_01', min: BRONZE_1 }
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
