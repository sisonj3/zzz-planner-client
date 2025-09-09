const Rank = Object.freeze({
    S: "S",
    A: "A",
    B: "B",
});

const Role = Object.freeze({
    ATTACK: "ATTACK",
    STUN: "STUN",
    ANOMALY: "ANOMALY",
    SUPPORT: "SUPPORT",
    DEFENDER: "DEFENDER",
    RUPTURE: "RUPTURE",
});

// W-Engines

export const wenginesList = [

    // B-Ranks

    Object.freeze({
        name: '[Lunar] Pleniluna',
            rank: Rank.B,
            role: Role.ATTACK,
    }),

    Object.freeze({
        name: '[Lunar] Decrescent',
            rank: Rank.B,
            role: Role.ATTACK,
    }),

    Object.freeze({
        name: '[Lunar] Noviluna',
            rank: Rank.B,
            role: Role.ATTACK,
    }),

    Object.freeze({
        name: '[Reverb] Mark I',
            rank: Rank.B,
            role: Role.SUPPORT,
    }),

    Object.freeze({
        name: '[Reverb] Mark II',
            rank: Rank.B,
            role: Role.SUPPORT,
    }),

    Object.freeze({
        name: '[Reverb] Mark III',
            rank: Rank.B,
            role: Role.SUPPORT,
    }),

    Object.freeze({
        name: '[Vortex] Revolver',
            rank: Rank.B,
            role: Role.STUN,
    }),

    Object.freeze({
        name: '[Vortex] Arrow',
            rank: Rank.B,
            role: Role.STUN,
    }),

    Object.freeze({
        name: '[Vortex] Hatchet',
            rank: Rank.B,
            role: Role.STUN,
    }),

    Object.freeze({
        name: '[Magnetic Storm] Alpha',
            rank: Rank.B,
            role: Role.ANOMALY,
    }),

    Object.freeze({
        name: '[Magnetic Storm] Bravo',
            rank: Rank.B,
            role: Role.ANOMALY,
    }),

    Object.freeze({
        name: '[Magnetic Storm] Charlie',
            rank: Rank.B,
            role: Role.ANOMALY,
    }),

    Object.freeze({
        name: '[Identity] Base',
            rank: Rank.B,
            role: Role.DEFENDER,
    }),

    Object.freeze({
        name: '[Identity] Inflection',
            rank: Rank.B,
            role: Role.DEFENDER,
    }),

    Object.freeze({
        name: '[Cinder] Cobalt',
            rank: Rank.B,
            role: Role.RUPTURE,
    }),

    // A-Ranks

    Object.freeze({
        name: 'Street Superstar',
            rank: Rank.A,
            role: Role.ATTACK,
    }),

    Object.freeze({
        name: 'Starlight Engine',
            rank: Rank.A,
            role: Role.ATTACK,
    }),

    Object.freeze({
        name: 'Gilded Blossom',
            rank: Rank.A,
            role: Role.ATTACK,
    }),

    Object.freeze({
        name: 'Marcato Desire',
            rank: Rank.A,
            role: Role.ATTACK,
    }),

    Object.freeze({
        name: 'Housekeeper',
            rank: Rank.A,
            role: Role.ATTACK,
    }),

    Object.freeze({
        name: 'Starlight Engine Replica',
            rank: Rank.A,
            role: Role.ATTACK,
    }),

    Object.freeze({
        name: 'Drill Rig - Red Axis',
            rank: Rank.A,
            role: Role.ATTACK,
    }),

    Object.freeze({
        name: 'Cannon Rotor',
            rank: Rank.A,
            role: Role.ATTACK,
    }),

    Object.freeze({
        name: 'Steam Oven',
            rank: Rank.A,
            role: Role.STUN,
    }),

    Object.freeze({
        name: 'Precious Fossilized Core',
            rank: Rank.A,
            role: Role.STUN,
    }),

    Object.freeze({
        name: 'Demara Battery Mark II',
            rank: Rank.A,
            role: Role.STUN,
    }),

    Object.freeze({
        name: 'Box Cutter',
            rank: Rank.A,
            role: Role.STUN,
    }),

    Object.freeze({
        name: 'Six Shooter',
            rank: Rank.A,
            role: Role.STUN,
    }),

    Object.freeze({
        name: 'Rainforest Gourmet',
            rank: Rank.A,
            role: Role.ANOMALY,
    }),

    Object.freeze({
        name: 'Weeping Gemini',
            rank: Rank.A,
            role: Role.ANOMALY,
    }),

    Object.freeze({
        name: 'Electro-Lip Gloss',
            rank: Rank.A,
            role: Role.ANOMALY,
    }),

    Object.freeze({
        name: 'Roaring Ride',
            rank: Rank.A,
            role: Role.ANOMALY,
    }),

    Object.freeze({
        name: 'Slice of Time',
            rank: Rank.A,
            role: Role.SUPPORT,
    }),

    Object.freeze({
        name: 'The Vault',
            rank: Rank.A,
            role: Role.SUPPORT,
    }),

    Object.freeze({
        name: 'Bashful Demon',
            rank: Rank.A,
            role: Role.SUPPORT,
    }),

    Object.freeze({
        name: 'Kaboom the Cannon',
            rank: Rank.A,
            role: Role.SUPPORT,
    }),

    Object.freeze({
        name: 'Unfettered Game Ball',
            rank: Rank.A,
            role: Role.SUPPORT,
    }),

    Object.freeze({
        name: 'Original Transmorpher',
            rank: Rank.A,
            role: Role.DEFENDER,
    }),

    Object.freeze({
        name: 'Bunny Band',
            rank: Rank.A,
            role: Role.DEFENDER,
    }),

    Object.freeze({
        name: 'Spring Embrace',
            rank: Rank.A,
            role: Role.DEFENDER,
    }),

    Object.freeze({
        name: 'Big Cylinder',
            rank: Rank.A,
            role: Role.DEFENDER,
    }),

    Object.freeze({
        name: 'Peacekeeper - Specialized',
            rank: Rank.A,
            role: Role.DEFENDER,
    }),

    Object.freeze({
        name: 'Tremor Trigram Vessel',
            rank: Rank.A,
            role: Role.DEFENDER,
    }),

    Object.freeze({
        name: 'Radiowave Journey',
            rank: Rank.A,
            role: Role.RUPTURE,
    }),

    Object.freeze({
        name: 'Puzzle Sphere',
            rank: Rank.A,
            role: Role.RUPTURE,
    }),

    // S Ranks

    Object.freeze({
        name: 'Steel Cushion',
            rank: Rank.S,
            role: Role.ATTACK,
    }),

    Object.freeze({
        name: 'The Brimstone',
            rank: Rank.S,
            role: Role.ATTACK,
    }),

    Object.freeze({
        name: 'Deep Sea Visitor',
            rank: Rank.S,
            role: Role.ATTACK,
    }),

    Object.freeze({
        name: 'Zanshin Herb Case',
            rank: Rank.S,
            role: Role.ATTACK,
    }),

    Object.freeze({
        name: 'Riot Suppressor Mark VI',
            rank: Rank.S,
            role: Role.ATTACK,
    }),

    Object.freeze({
        name: 'Severed Innocence',
            rank: Rank.S,
            role: Role.ATTACK,
    }),

    Object.freeze({
        name: 'Myriad Eclipse',
            rank: Rank.S,
            role: Role.ATTACK,
    }),

    Object.freeze({
        name: 'Cordis Germina',
            rank: Rank.S,
            role: Role.ATTACK,
    }),

    Object.freeze({
        name: 'Bellicose Blaze',
            rank: Rank.S,
            role: Role.ATTACK,
    }),

    Object.freeze({
        name: 'Hellfire Gears',
            rank: Rank.S,
            role: Role.STUN,
    }),

    Object.freeze({
        name: 'The Restrained',
            rank: Rank.S,
            role: Role.STUN,
    }),

    Object.freeze({
        name: 'Blazing Laurel',
            rank: Rank.S,
            role: Role.STUN,
    }),

    Object.freeze({
        name: 'Ice-Jade Teapot',
            rank: Rank.S,
            role: Role.STUN,
    }),

    Object.freeze({
        name: 'Spectral Gaze',
            rank: Rank.S,
            role: Role.STUN,
    }),

    Object.freeze({
        name: 'Roaring Fur-nace',
            rank: Rank.S,
            role: Role.STUN,
    }),

    Object.freeze({
        name: 'Hailstorm Shrine',
            rank: Rank.S,
            role: Role.ANOMALY,
    }),

    Object.freeze({
        name: 'Flamemaker Shaker',
            rank: Rank.S,
            role: Role.ANOMALY,
    }),

    Object.freeze({
        name: 'Fusion Compiler',
            rank: Rank.S,
            role: Role.ANOMALY,
    }),

    Object.freeze({
        name: 'Timeweaver',
            rank: Rank.S,
            role: Role.ANOMALY,
    }),

    Object.freeze({
        name: 'Sharpened Stinger',
            rank: Rank.S,
            role: Role.ANOMALY,
    }),

    Object.freeze({
        name: 'Flight of Fancy',
            rank: Rank.S,
            role: Role.ANOMALY,
    }),

    Object.freeze({
        name: 'Practiced Perfection',
            rank: Rank.S,
            role: Role.ANOMALY,
    }),

    Object.freeze({
        name: 'Weeping Cradle',
            rank: Rank.S,
            role: Role.SUPPORT,
    }), 

    Object.freeze({
        name: 'Elegant Vanity',
            rank: Rank.S,
            role: Role.SUPPORT,
    }), 

    Object.freeze({
        name: 'Metanukimorphosis',
            rank: Rank.S,
            role: Role.SUPPORT,
    }),

    Object.freeze({
        name: 'Tusks of Fury',
            rank: Rank.S,
            role: Role.DEFENDER,
    }),

    Object.freeze({
        name: 'Qingming Birdcage',
            rank: Rank.S,
            role: Role.RUPTURE,
    }),
];

export function findWengine(name) {

    for (let i = 0; i < wenginesList.length; i++){
        if (wenginesList[i].name == name) {
            return wenginesList[i];
        }
    }
    
    console.log("W-engine not found");
}
