const Rank = Object.freeze({
    S: "S",
    A: "A",
    B: "B",
});

const Attribute = Object.freeze({
    FIRE: "FIRE",
    ICE: "ICE",
    ELECTRIC: "ELECTRIC",
    ETHER: "ETHER",
    PHYSICAL: "PHYSICAL",
});

const Role = Object.freeze({
    ATTACK: "ATTACK",
    STUN: "STUN",
    ANOMALY: "ANOMALY",
    SUPPORT: "SUPPORT",
    DEFENDER: "DEFENDER",
    RUPTURE: "RUPTURE",
});
    
const Weekly = Object.freeze({
    Ferocious_Grip: "Ferocious_Grip",
    Living_Drive: "Living_Drive",
    Finale_Dance_Shoes: "Finale_Dance_Shoes",
    Scarlet_Engine: "Scarlet_Engine",
    Sycophants_Refinement: "Sycophants_Refinement",
    Exuvia_of_Refinement: "Exuvia_of_Refinement",
});

const Expert = Object.freeze({
    Murderous_Obituary: "Murderous_Obituary",
    Crimson_Awe: "Crimson_Awe",
    Ethereal_Pursuit: "Ethereal_Pursuit",
    Steel_Malice: "Steel_Malice",
    Destructive_Advance: "Destructive_Advance",
    Falling_Fist: "Falling_Fist",
    Stealth_Phantom: "Stealth_Phantom",
    Thunderous_Dragon: "Thunderous_Dragon",
    Mortal_Cleave: "Mortal_Cleave",
    Miasmic_Elytron: "Miasmic_Elytron",
});

// Characters

// A Ranks
export default agents = [
    Object.freeze({
        name: 'Anby',
        rank: Rank.A,
        role: Role.STUN,
        attribute: Attribute.ELECTRIC,
        weekly: Weekly.Ferocious_Grip,
        expert: Expert.Murderous_Obituary,
    }),
    
    Object.freeze({
        name: 'Nicole',
        rank: Rank.A,
        role: Role.SUPPORT,
        attribute: Attribute.ETHER,
        weekly: Weekly.Ferocious_Grip,
        expert: Expert.Murderous_Obituary,
    }),

    Object.freeze({
        name: 'Billy',
        rank: Rank.A,
        role: Role.ATTACK,
        attribute: Attribute.PHYSICAL,
        weekly: Weekly.Ferocious_Grip,
        expert: Expert.Ethereal_Pursuit,
    }),

    Object.freeze({
        name: 'Corin',
            rank: Rank.A,
            role: Role.ATTACK,
            attribute: Attribute.PHYSICAL,
            weekly: Weekly.Finale_Dance_Shoes,
            expert: Expert.Crimson_Awe,
    }),

    Object.freeze({
        name: 'Anton',
            rank: Rank.A,
            role: Role.ATTACK,
            attribute: Attribute.ELECTRIC,
            weekly: Weekly.Living_Drive,
            expert: Expert.Destructive_Advance,
    }),

    Object.freeze({
        name: 'Ben',
            rank: Rank.A,
            role: Role.DEFENDER,
            attribute: Attribute.FIRE,
            weekly: Weekly.Living_Drive,
            expert: Expert.Steel_Malice,
    }),

    Object.freeze({
        name: 'Seth',
            rank: Rank.A,
            role: Role.DEFENDER,
            attribute: Attribute.ELECTRIC,
            weekly: Weekly.Living_Drive,
            expert: Expert.Falling_Fist,
    }),

    Object.freeze({
        name: 'Lucy',
            rank: Rank.A,
            role: Role.SUPPORT,
            attribute: Attribute.FIRE,
            weekly: Weekly.Ferocious_Grip,
            expert: Expert.Steel_Malice,
    }),

    Object.freeze({
        name: 'Piper',
            rank: Rank.A,
            role: Role.ANOMALY,
            attribute: Attribute.PHYSICAL,
            weekly: Weekly.Finale_Dance_Shoes,
            expert: Expert.Crimson_Awe,
    }),

    Object.freeze({
        name: 'Pulchra',
            rank: Rank.A,
            role: Role.STUN,
            attribute: Attribute.PHYSICAL,
            weekly: Weekly.Scarlet_Engine,
            expert: Expert.Stealth_Phantom,
    }),

    Object.freeze({
        name: 'Soukaku',
            rank: Rank.A,
            role: Role.SUPPORT,
            attribute: Attribute.ICE,
            weekly: Weekly.Finale_Dance_Shoes,
            expert: Expert.Murderous_Obituary,
    }),

    Object.freeze({
        name: 'Pan Yinhu',
            rank: Rank.A,
            role: Role.DEFENDER,
            attribute: Attribute.PHYSICAL,
            weekly: Weekly.Exuvia_of_Refinement,
            expert: Expert.Miasmic_Elytron,
    }),

    // S Ranks

    Object.freeze({
        name: 'Nekomata',
            rank: Rank.S,
            role: Role.ATTACK,
            attribute: Attribute.PHYSICAL,
            weekly: Weekly.Ferocious_Grip,
            expert: Expert.Crimson_Awe,
    }),

    Object.freeze({
        name: 'Lycaon',
            rank: Rank.S,
            role: Role.STUN,
            attribute: Attribute.ICE,
            weekly: Weekly.Finale_Dance_Shoes,
            expert: Expert.Ethereal_Pursuit,
    }),

    Object.freeze({
        name: 'Ellen',
            rank: Rank.S,
            role: Role.ATTACK,
            attribute: Attribute.ICE,
            weekly: Weekly.Ferocious_Grip,
            expert: Expert.Murderous_Obituary,
    }),

    Object.freeze({
        name: 'Rina',
            rank: Rank.S,
            role: Role.SUPPORT,
            attribute: Attribute.ELECTRIC,
            weekly: Weekly.Finale_Dance_Shoes,
            expert: Expert.Destructive_Advance,
    }),

    Object.freeze({
        name: 'Koleda',
            rank: Rank.S,
            role: Role.STUN,
            attribute: Attribute.FIRE,
            weekly: Weekly.Living_Drive,
            expert: Expert.Steel_Malice,
    }),

    Object.freeze({
        name: 'Grace',
            rank: Rank.S,
            role: Role.ANOMALY,
            attribute: Attribute.ELECTRIC,
            weekly: Weekly.Living_Drive,
            expert: Expert.Destructive_Advance,
    }),

    Object.freeze({
        name: 'Zhu Yuan',
            rank: Rank.S,
            role: Role.ATTACK,
            attribute: Attribute.ETHER,
            weekly: Weekly.Living_Drive,
            expert: Expert.Ethereal_Pursuit,
    }),

    Object.freeze({
        name: 'Qingyi',
            rank: Rank.S,
            role: Role.STUN,
            attribute: Attribute.ELECTRIC,
            weekly: Weekly.Living_Drive,
            expert: Expert.Ethereal_Pursuit,
    }),

    Object.freeze({
        name: 'Jane',
            rank: Rank.S,
            role: Role.ANOMALY,
            attribute: Attribute.PHYSICAL,
            weekly: Weekly.Ferocious_Grip,
            expert: Expert.Falling_Fist,
    }),

    Object.freeze({
        name: 'Caesar',
            rank: Rank.S,
            role: Role.DEFENDER,
            attribute: Attribute.PHYSICAL,
            weekly: Weekly.Scarlet_Engine,
            expert: Expert.Stealth_Phantom,
    }),

    Object.freeze({
        name: 'Burnice',
            rank: Rank.S,
            role: Role.ANOMALY,
            attribute: Attribute.FIRE,
            weekly: Weekly.Scarlet_Engine,
            expert: Expert.Stealth_Phantom,
    }),

    Object.freeze({
        name: 'Lighter',
            rank: Rank.S,
            role: Role.STUN,
            attribute: Attribute.FIRE,
            weekly: Weekly.Scarlet_Engine,
            expert: Expert.Crimson_Awe,
    }),

    Object.freeze({
        name: 'Yanagi',
            rank: Rank.S,
            role: Role.ANOMALY,
            attribute: Attribute.ELECTRIC,
            weekly: Weekly.Living_Drive,
            expert: Expert.Destructive_Advance,
    }),

    Object.freeze({
        name: 'Harumasa',
            rank: Rank.S,
            role: Role.ATTACK,
            attribute: Attribute.ELECTRIC,
            weekly: Weekly.Sycophants_Refinement,
            expert: Expert.Thunderous_Dragon,
    }),

    Object.freeze({
        name: 'Miyabi',
            rank: Rank.S,
            role: Role.ANOMALY,
            attribute: Attribute.ICE,
            weekly: Weekly.Sycophants_Refinement,
            expert: Expert.Thunderous_Dragon,
    }),

    Object.freeze({
        name: 'Soldier 11',
            rank: Rank.S,
            role: Role.ATTACK,
            attribute: Attribute.FIRE,
            weekly: Weekly.Finale_Dance_Shoes,
            expert: Expert.Destructive_Advance,
    }),

    Object.freeze({
        name: 'Trigger',
            rank: Rank.S,
            role: Role.STUN,
            attribute: Attribute.ELECTRIC,
            weekly: Weekly.Ferocious_Grip,
            expert: Expert.Mortal_Cleave,
    }),

    Object.freeze({
        name: 'Soldier 0 Anby',
            rank: Rank.S,
            role: Role.ATTACK,
            attribute: Attribute.ELECTRIC,
            weekly: Weekly.Living_Drive,
            expert: Expert.Mortal_Cleave,
    }),

    Object.freeze({
        name: 'Astra Yao',
            rank: Rank.S,
            role: Role.SUPPORT,
            attribute: Attribute.ETHER,
            weekly: Weekly.Finale_Dance_Shoes,
            expert: Expert.Thunderous_Dragon,
    }),

    Object.freeze({
        name: 'Evelyn',
            rank: Rank.S,
            role: Role.ATTACK,
            attribute: Attribute.FIRE,
            weekly: Weekly.Scarlet_Engine,
            expert: Expert.Steel_Malice,
    }),

    Object.freeze({
        name: 'Vivian',
            rank: Rank.S,
            role: Role.ANOMALY,
            attribute: Attribute.ETHER,
            weekly: Weekly.Sycophants_Refinement,
            expert: Expert.Thunderous_Dragon,
    }),

    Object.freeze({
        name: 'Hugo Vlad',
            rank: Rank.S,
            role: Role.ATTACK,
            attribute: Attribute.ICE,
            weekly: Weekly.Finale_Dance_Shoes,
            expert: Expert.Murderous_Obituary,
    }),

    Object.freeze({
        name: 'Yixuan',
            rank: Rank.S,
            role: Role.RUPTURE,
            attribute: Attribute.ETHER,
            weekly: Weekly.Exuvia_of_Refinement,
            expert: Expert.Miasmic_Elytron,
    }),

    Object.freeze({
        name: 'Ju Fufu',
            rank: Rank.S,
            role: Role.STUN,
            attribute: Attribute.FIRE,
            weekly: Weekly.Exuvia_of_Refinement,
            expert: Expert.Miasmic_Elytron,
    }),
];