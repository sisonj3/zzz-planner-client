import material from "../classes/material";
import { requiredCagePasses, requiredCoreMats, requiredDennies, requiredExp, requiredPromotionMats, requiredSkillMats } from './requiredAgentMats';

// Promise to get agent materials
export default async function getAgentMats(token, agent) {
    // Array to hold materials
    let materials = [];
    
    // Fetch list of agent attributes
    await fetch(`${import.meta.env.VITE_API_URL}/character/${agent.name}`, {
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
            materials.push(new material("Dennies", requiredDennies(agent)));

            // XP
            const xpMats = requiredExp(agent);

            materials.push(new material("Trainee Investigator Log", xpMats[0]));
            materials.push(new material("Official Investigator Log", xpMats[1]));
            materials.push(new material("Senior Investigator Log", xpMats[2]));

            // Ascension
            const promoteMats = requiredPromotionMats(agent);

            switch (response.role) {
                case "ATTACK":
                    materials.push(new material("Basic Attack Certification Seal", promoteMats[0]));
                    materials.push(new material("Advanced Attack Certification Seal", promoteMats[1]));
                    materials.push(new material("Pioneer's Certification Seal", promoteMats[2]));
                    break;
                case "STUN":
                    materials.push(new material("Basic Stun Certification Seal", promoteMats[0]));
                    materials.push(new material("Advanced Stun Certification Seal", promoteMats[1]));
                    materials.push(new material("Buster Certification Seal", promoteMats[2]));
                    break;
                case "ANOMALY":
                    materials.push(new material("Basic Anomaly Certification Seal", promoteMats[0]));
                    materials.push(new material("Advanced Anomaly Certification Seal", promoteMats[1]));
                    materials.push(new material("Controller Certification Seal", promoteMats[2]));
                    break;
                case "SUPPORT":
                    materials.push(new material("Basic Support Certification Seal", promoteMats[0]));
                    materials.push(new material("Advanced Support Certification Seal", promoteMats[1]));
                    materials.push(new material("Ruler Certification Seal", promoteMats[2]));
                    break;
                case "DEFENDER":
                    materials.push(new material("Basic Defense Certification Seal", promoteMats[0]));
                    materials.push(new material("Advanced Defense Certification Seal", promoteMats[1]));
                    materials.push(new material("Defender Certification Seal", promoteMats[2]));
                    break;
            }

            // Skills + Cage Pass
            const skillMats = requiredSkillMats(agent);

            switch (response.attribute) {
                case "PHYSICAL":
                    materials.push(new material("Basic Physical Chip", skillMats[0]));
                    materials.push(new material("Advanced Physical Chip", skillMats[1]));
                    materials.push(new material("Specialized Physical Chip", skillMats[2]));
                    break;
                case "FIRE":
                    materials.push(new material("Basic Burn Chip", skillMats[0]));
                    materials.push(new material("Advanced Burn Chip", skillMats[1]));
                    materials.push(new material("Specialized Burn Chip", skillMats[2]));
                    break;
                case "ICE":
                    materials.push(new material("Basic Freeze Chip", skillMats[0]));
                    materials.push(new material("Advanced Freeze Chip", skillMats[1]));
                    materials.push(new material("Specialized Freeze Chip", skillMats[2]));
                    break;
                case "ELECTRIC":
                    materials.push(new material("Basic Shock Chip", skillMats[0]));
                    materials.push(new material("Advanced Shock Chip", skillMats[1]));
                    materials.push(new material("Specialized Shock Chip", skillMats[2]));
                    break;
                case "ETHER":
                    materials.push(new material("Basic Ether Chip", skillMats[0]));
                    materials.push(new material("Advanced Ether Chip", skillMats[1]));
                    materials.push(new material("Specialized Ether Chip", skillMats[2]));
                    break;
            }

            materials.push(new material("Hamster Cage Pass", requiredCagePasses(agent)));

            // [Weekly, Expert]
            const coreMats = requiredCoreMats(agent);

            // Expert
            materials.push(new material(response.expert, coreMats[1]));

            // Weekly
            materials.push(new material(response.weekly, coreMats[0]));

        })
        .catch(error => console.error(error));
    
    return materials;
}