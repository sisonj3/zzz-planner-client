import material from '../classes/material';
import { requiredDennies, requiredExp, requiredUpgradeMats } from './requiredWengineMats';

// Promise to get Wengine Mats
export default async function getWengineMats(token, wengine) {
    // Array to hold materials
    let materials = [];

    // Fetch list of agent attributes
    await fetch(`${import.meta.env.VITE_API_URL}/wengine/${wengine.name}`, {
            mode: 'cors',
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`,
            },
        })
        .then(response => response.json())
        .then(response => {
            //console.log(response);

            // Dennies
            materials.push(new material("Dennies", requiredDennies(wengine, response.rank)));

            // XP
            const xpMats = requiredExp(wengine, response.rank);

            materials.push(new material("W-Engine Battery", xpMats[0]));
            materials.push(new material("W-Engine Power Supply", xpMats[1]));
            materials.push(new material("W-Engine Energy Module", xpMats[2]));

            // Upgrade
            const upgradeMats = requiredUpgradeMats(wengine, response.rank);

            switch (response.role) {
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
            }

        })
        .catch(error => console.error(error));

    return materials;
}