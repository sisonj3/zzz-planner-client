import material from '../classes/material';
import { requiredDennies, requiredExp, requiredUpgradeMats } from './requiredWengineMats';
import { findWengine } from "../unit_info/wengines";

// Promise to get Wengine Mats
export default async function getWengineMats(wengine) {
    // Array to hold materials
    let materials = [];

    let wengineData = findWengine(wengine.name);

    // Dennies
    materials.push(new material("Dennies", requiredDennies(wengine, wengineData.rank)));

    // XP
    const xpMats = requiredExp(wengine, wengineData.rank);

    materials.push(new material("W-Engine Battery", xpMats[0]));
    materials.push(new material("W-Engine Power Supply", xpMats[1]));
    materials.push(new material("W-Engine Energy Module", xpMats[2]));

    // Upgrade
    const upgradeMats = requiredUpgradeMats(wengine, wengineData.rank);

    switch (wengineData.role) {
        case "ATTACK":
            materials.push(new material("Attack Component", upgradeMats[0]));
            materials.push(new material("Reinforced Attack Component", upgradeMats[1]));
            materials.push(new material("Specialized Attack Component", upgradeMats[2]));
            break;
        case "STUN":
            materials.push(new material("Stun Component", upgradeMats[0]));
            materials.push(new material("Reinforced Stun Component", upgradeMats[1]));
            materials.push(new material("Specialized Stun Component", upgradeMats[2]));
            break;
        case "ANOMALY":
            materials.push(new material("Anomaly Component", upgradeMats[0]));
            materials.push(new material("Reinforced Anomaly Component", upgradeMats[1]));
            materials.push(new material("Specialized Anomaly Component", upgradeMats[2]));
            break;
        case "SUPPORT":
            materials.push(new material("Support Component", upgradeMats[0]));
            materials.push(new material("Reinforced Support Component", upgradeMats[1]));
            materials.push(new material("Specialized Support Component", upgradeMats[2]));
            break;
        case "DEFENDER":
            materials.push(new material("Defense Component", upgradeMats[0]));
            materials.push(new material("Reinforced Defense Component", upgradeMats[1]));
            materials.push(new material("Specialized Defense Component", upgradeMats[2]));
            break;
        case "RUPTURE":
            materials.push(new material("Rupture Component", upgradeMats[0]));
            materials.push(new material("Reinforced Rupture Component", upgradeMats[1]));
            materials.push(new material("Specialized Rupture Component", upgradeMats[2]));
            break;
    }

    return materials;
}
