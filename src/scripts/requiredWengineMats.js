// XP values
const battery = 100;
const powerSupply = 600;
const energyModule = 3000;

// XP Arrays
const bXp = [
    30, 60, 90, 120, 180, 240, 300, 360, 450, 570,
    720, 770, 830, 880, 935, 985, 1040, 1095, 1145, 1200,
    1870, 1990, 2105, 2225, 2340, 2460, 2575, 2695, 2810, 2930,
    4320, 4560, 4800, 5040, 5280, 5520, 5760, 6000, 6240, 6480,
    6840, 7320, 7800, 8280, 8760, 9240, 9720, 10200, 10680, 11160,
    13680, 14640, 15600, 16560, 17520, 18480, 19440, 20400, 21360, 22320
];

const aXp = [
    40, 80, 120, 160, 240, 320, 400, 480, 600, 760,
    960, 1030, 1105, 1170, 1245, 1310, 1390, 1460, 1530, 1600,
    2495, 2650, 2810, 2965, 3120, 3280, 3435, 3590, 3750, 3905,
    5760, 6080, 6400, 6720, 7040, 7360, 7680, 8000, 8320, 8640,
    9120, 9760, 10400, 11040, 11680, 12320, 12960, 13600, 14240, 14880,
    18240, 19520, 20800, 22080, 23360, 24640, 25920, 27200, 28480, 29760
];

const sXp = [
    50, 100, 150, 200, 300, 400, 500, 600, 750, 950,
    1200, 1290, 1380, 1465, 1555, 1640, 1735, 1825, 1910, 2000,
    3120, 3315, 3510, 3705, 3900, 4100, 4295, 4490, 4685, 4880,
    7200, 7600, 8000, 8400, 8800, 9200, 9600, 10000, 10400, 10800,
    11400, 12200, 13000, 13800, 14600, 15400, 16200, 17000, 17800, 18600,
    22800, 24400, 26000, 27600, 29200, 30800, 32400, 34000, 35600, 37200
];

// Upgrade arrays [upgradeMat, dennies]
const bUpgrade = [
    [2, 7200], [7, 16800], [12, 36000], [6, 60000], [12, 120000]
];

const aUpgrade = [
    [3, 9600], [10, 22400], [16, 48000], [8, 80000], [16, 160000]
];

const sUpgrade = [
    [4, 12000], [12, 28000], [20, 60000], [10, 100000], [20, 200000]
];

function requiredDennies(wengine, rank) {
    let dennies = 0;

    for (let i = wengine.asc_c; i < wengine.asc_g; i++) {
        switch (rank) {
            case "B":
                dennies += bUpgrade[i][1];
                break;
            case "A":
                dennies += aUpgrade[i][1];
                break;
            case "S":
                dennies += sUpgrade[i][1];
                break;
        }
    }

    return dennies;
}

function requiredExp(wengine, rank) {
    // Amount of each material needed
    let xpMatsAmount = [0, 0, 0];
    // XP needed for levels
    let totalXP = 0;

    // Get XP needed based on level goals
    for (let i = wengine.lvl_c; i < wengine.lvl_g; i++) {
        switch (rank) {
            case "B":
                totalXP += bXp[i];
                break;
            case "A":
                totalXP += aXp[i];
                break;
            case "S":
                totalXP += sXp[i];
                break;
        }
    }

    // Get needed amount of senior xp
    if (totalXP >= energyModule) {
        xpMatsAmount[2] = Math.trunc(totalXP / energyModule);
    }

    totalXP = totalXP % energyModule;

    // Get needed amount of official xp
    if (totalXP >= powerSupply) {
        xpMatsAmount[1] = Math.trunc(totalXP / powerSupply);
    }

    totalXP = totalXP % powerSupply;

    // Get needed amount of trainee xp
    xpMatsAmount[0] = Math.ceil(totalXP / battery);

    return xpMatsAmount;
}

function requiredUpgradeMats(wengine, rank) {
    let upgradeMats = [0, 0, 0];

    for (let i = wengine.asc_c; i < wengine.asc_g; i++) {
        switch (rank) {
            case "B":
                if (i >= 1 && i < 3) {
                    upgradeMats[1] += bUpgrade[i][0];
                } else if (i >= 3) {
                    upgradeMats[2] += bUpgrade[i][0];
                } else {
                    upgradeMats[0] += bUpgrade[i][0];
                }
                break;
            case "A":
                if (i >= 1 && i < 3) {
                    upgradeMats[1] += aUpgrade[i][0];
                } else if (i >= 3) {
                    upgradeMats[2] += aUpgrade[i][0];
                } else {
                    upgradeMats[0] += aUpgrade[i][0];
                }
                break;
            case "S":
                if (i >= 1 && i < 3) {
                    upgradeMats[1] += sUpgrade[i][0];
                } else if (i >= 3) {
                    upgradeMats[2] += sUpgrade[i][0];
                } else {
                    upgradeMats[0] += sUpgrade[i][0];
                }
                break;
        }
    }

    return upgradeMats;
}

export {
    requiredDennies,
    requiredExp,
    requiredUpgradeMats
}