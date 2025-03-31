// Amount of xp from materials
const traineeXP = 100;
const officialXP = 600;
const seniorXP = 3000;

// Exp required
const levelMats = [
    50, 150, 250, 400, 600, 800, 1000, 1250, 1500, 1800,
    1935, 2065, 2200, 2335, 2465, 2600, 2735, 2865, 3000, 4680,
    4975, 5265, 5560, 5855, 6145, 6440, 6735, 7025, 7320, 10800,
    11400, 12000, 12600, 13200, 13800, 14400, 15000, 15600, 16200, 17100,
    18300, 19500, 20700, 21900, 23100, 24300, 25500, 26700, 27900, 34200,
    36600, 39000, 41400, 43800, 46200, 48600, 51000, 53400, 55800
];

// Array of [promotion amount, dennies amount]
const promotionMats = [[4, 24000], [12, 56000], [20, 120000], [10, 200000], [20, 400000]];

// Array of [cage pass amount, skill chip amount, dennies amount]
const skillMats = [[2, 2000], [3, 3000], [2, 6000], [3, 9000], [4, 12000], [6, 18000], [5, 45000], [8, 67500], [10, 90000], [12, 112500], [15, 135000]];

// Array of [weekly amount, expert amount, dennies amount]
const coreMats = [[0, 0, 5000], [0, 2, 12000], [0, 4, 28000], [2, 9, 60000], [3, 15, 100000], [4, 30, 200000]];

function requiredCoreMats(agent) {
    // Weekly, Expert
    let core = [0, 0];

    for (let i = agent.core_c; i < agent.core_g; i++){
        core[0] += coreMats[i][0];
        core[1] += coreMats[i][1];
    }

    return core;
}

function requiredSkillMats(agent) {
    let chips = [0, 0, 0];

    for (let i = agent.s1_c - 1; i < agent.s1_g - 1; i++){
        if (i < 2) {
            chips[0] += skillMats[i][0];
        } else if (i > 5) {
            chips[2] += skillMats[i][0];
        } else {
            chips[1] += skillMats[i][0];
        }
    }

    for (let i = agent.s2_c - 1; i < agent.s2_g - 1; i++){
        if (i < 2) {
            chips[0] += skillMats[i][0];
        } else if (i > 5) {
            chips[2] += skillMats[i][0];
        } else {
            chips[1] += skillMats[i][0];
        }
    }

    for (let i = agent.s3_c - 1; i < agent.s3_g - 1; i++){
        if (i < 2) {
            chips[0] += skillMats[i][0];
        } else if (i > 5) {
            chips[2] += skillMats[i][0];
        } else {
            chips[1] += skillMats[i][0];
        }
    }

    for (let i = agent.s4_c - 1; i < agent.s4_g - 1; i++){
        if (i < 2) {
            chips[0] += skillMats[i][0];
        } else if (i > 5) {
            chips[2] += skillMats[i][0];
        } else {
            chips[1] += skillMats[i][0];
        }
    }

    for (let i = agent.s5_c - 1; i < agent.s5_g - 1; i++){
        if (i < 2) {
            chips[0] += skillMats[i][0];
        } else if (i > 5) {
            chips[2] += skillMats[i][0];
        } else {
            chips[1] += skillMats[i][0];
        }
    }

    return chips;
}

function requiredPromotionMats(agent) {
    let promoteMats = [0, 0, 0];

    for (let i = agent.asc_c; i < agent.asc_g; i++) {
        if (i >= 1 && i < 3) {
            promoteMats[1] += promotionMats[i][0];
        } else if (i >= 3) {
            promoteMats[2] += promotionMats[i][0];
        } else {
            promoteMats[0] += promotionMats[i][0];
        }
    }

    return promoteMats;
}

function requiredExp(agent) {
    // Amount of each material needed
    let xpMatsAmount = [0, 0, 0];
    // XP needed for levels
    let totalXP = 0;

    // Get XP needed based on level goals
    for (let i = agent.lvl_c - 1; i < agent.lvl_g - 1; i++) {
        totalXP += levelMats[i];
    }

    // Get needed amount of senior xp
    if (totalXP >= seniorXP) {
        xpMatsAmount[2] = Math.trunc(totalXP / seniorXP);
    }

    totalXP = totalXP % seniorXP;

    // Get needed amount of official xp
    if (totalXP >= officialXP) {
        xpMatsAmount[1] = Math.trunc(totalXP / officialXP);
    }

    totalXP = totalXP % officialXP;

    // Get needed amount of trainee xp
    xpMatsAmount[0] = Math.ceil(totalXP / traineeXP);

    return xpMatsAmount;
}

function requiredDennies(agent) {
    let dennies = 0

    // Dennies from promotion
    for (let i = agent.asc_c; i < agent.asc_g; i++) {
        dennies += promotionMats[i][1];
    }

    // Dennies from skills
    for (let i = agent.s1_c - 1; i < agent.s1_g - 1; i++) {
        dennies += skillMats[i][1];
    }

    for (let i = agent.s2_c - 1; i < agent.s2_g - 1; i++) {
        dennies += skillMats[i][1];
    }

    for (let i = agent.s3_c - 1; i < agent.s3_g - 1; i++) {
        dennies += skillMats[i][1];
    }

    for (let i = agent.s4_c - 1; i < agent.s4_g - 1; i++) {
        dennies += skillMats[i][1];
    }

    for (let i = agent.s5_c - 1; i < agent.s5_g - 1; i++) {
        dennies += skillMats[i][1];
    }

    // Dennies from core
    for (let i = agent.core_c; i < agent.core_g; i++) {
        dennies += coreMats[i][2];
    }

    return dennies;
}

function requiredCagePasses(agent) {
    let passCount = 0;

    if (agent.s1_g == 12 && agent.s1_c < 12) {
        passCount++;
    }

    if (agent.s2_g == 12 && agent.s2_c < 12) {
        passCount++;
    }

    if (agent.s3_g == 12 && agent.s3_c < 12) {
        passCount++;
    }

    if (agent.s4_g == 12 && agent.s4_c < 12) {
        passCount++;
    }

    if (agent.s5_g == 12 && agent.s5_c < 12) {
        passCount++;
    }

    return passCount;
}

export {
    requiredCoreMats,
    requiredSkillMats,
    requiredPromotionMats,
    requiredExp,
    requiredDennies,
    requiredCagePasses
}