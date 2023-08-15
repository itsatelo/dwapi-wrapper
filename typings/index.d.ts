declare module 'dwapi-wrapper' {
        export function getBuild(id: string): Promise<BuildObject>;
        export function getCategory(name: string): Promise<CategoryObject>;
        export function getMantra(name: string): Promise<MantraObject>;
        export function getOutfit(name: string): Promise<OutfitObject>;
        export function getTalent(name: string): Promise<TalentObject>;
        export function getWeapon(name: string): Promise<WeaponObject>;

        export function getAllCategories(): Promise<CategoryObject[]>;
        export function getAllMantras(): Promise<MantraObject[]>;
        export function getAllOutfits(): Promise<OutfitObject[]>;
        export function getAllTalents(): Promise<TalentObject[]>;
        export function getAllWeapons(): Promise<WeaponObject[]>;

    interface BuildObject {
        details: BuildDetailsObject;
        character: BuildCharacterObject;
        stats: BuildStatsObject;

        talents: TalentObject[];
        mantras: MantraObject[];
        weapon: WeaponObject | null;
    }

    interface BuildDetailsObject {
        id: string,
        title: string,
        description: string,
        author: string,
        notes: string,
    }

    interface BuildCharacterObject {
        race: CharacterRace;
        origin: CharacterOrigin;
        oath: CharacterOath;
        outfit: OutfitObject;
        resonance: CharacterResonance;
        murmur: CharacterMurmur;

        boons: CharacterBoon[],
        flaws: CharacterFlaw[],

        traits: BuildCharacterTraitsObject;
    }

    interface BuildCharacterTraitsObject {
        vitality: number;
        erudition: number;
        proficiency: number;
        songchant: number;
    }

    interface BuildStatsObject {
        pre_shrine: StatsObject;
        post_shrine: StatsObject;
    }

    //

    interface CategoryObject {
        name: string;
        talents: string[];
    }

    //

    interface MantraObject {
        name: string;
        description: string;

        details: MantraDetailsObject;
        requirements: RequirementsObject;
        gif: string;
    }

    interface MantraDetailsObject {
        category: MantraCategory;
        type: MantraCategory;
        stars: string;
    }

    //

    interface OutfitObject {
        name: string;
        durability: string;
        resistances: OutfitResistancesObject;
        stats: OutfitStatsObject;
        talent: string;
        requirements: RequirementsObject;
        crafting_materials: string[];
        notes: string;
        image: string;
    }

    interface OutfitResistancesObject {
        physical_resistance: number;
        slash_resistance: number;
        blunt_resistance: number;
        elemental_resistance: number;
        flame_resistance: number;
        ice_resistance: number;
        thunder_resistance: number;
        wind_resistance: number;
        shadow_resistance: number;
    }

    interface OutfitStatsObject {
        ether_regeneration: string;
        additional_stealth: string;
    }

    //

    interface TalentObject {
        name: string;
        description: string;
        rarity: TalentRarity;
        category: string;

        requirements: RequirementsObject;
        stats: string[];

        getCategory(): CategoryObject;
    }

    //

    interface WeaponObject {
        name: string | null;
        type: string;

        damage: number;
        damage_types: string[];

        penetration: number;
        chip: number;
        weight: number;
        range: number;
        swing_speed: number;
        endlag: number;

        scaling: Object;
        requirements: StatsObject;
    }

    //

    interface RequirementsObject {
        character: RequirementsCharacterObject;
        stats: StatsObject;
    }

    interface RequirementsCharacterObject {
        power: number,
        weapon_type: string,
        talent?: string | undefined,
        mantra?: string | undefined,
    }

    interface StatsObject {
        light_weapons: number,
        medium_weapons: number,
        heavy_weapons: number,

        strength: number,
        fortitude: number,
        agility: number,
        intelligence: number,
        willpower: number,
        charisma: number,

        flamecharm: number,
        frostdraw: number,
        thundercall: number,
        galebreathe: number,
        shadowcast: number,
        ironsing: number,
    }

    //

    enum CharacterRace {
        Etrean = "Etrean",
        Celtor = "Celtor",
        Adret = "Adret",
        Canor = "Canor",
        Gremor = "Gremor",
        Khan = "Khan",
        Felinor = "Felinor",
        Chrysid = "Chrysid",
        Vesperian = "Vesperian",
        Capra = "Capra",
        Ganymede = "Ganymede",
        Tiran = "Tiran",
        Drakkard = "Drakkard",
        Lightborn = "Lightborn",
    }

    enum CharacterOrigin {
        Castaway = "Castaway",
        LoneWarrior = "Lone Warrior",
        Deepbound = "Deepbound",
        Voidwalker = "Voidwalker",
    }

    enum CharacterOath {
        Oathless = "Oathless",
        Blindseer = "Blindseer",
        Visionshaper = "Visionshaper",
        Starkindred = "Starkindred",
        Arcwarder = "Arcwarder",
        Linkstrider = "Linkstrider",
        Jetstriker = "Jetstriker",
        Dawnwalker = "Dawnwalker",
        Contractor = "Contractor",
        Silentheart = "Silentheart",
        Fadetrimmer = "Fadetrimmer",
    }

    enum CharacterResonance {
        BloodScourge = "Blood Scourge",
        Payback = "Payback",
        CrazySlots = "Crazy Slots",
        ShardBow = "Shard Bow",
        RunItBack = "Run It Back",
        Resurrection = "Resurrection",
        WindUp = "Wind Up",
        GravityField = "Gravity Field",
        SacredField = "Sacred Field",
        Portals = "Portals",
        JarOfSouls = "Jar Of Souls",
        DimensionalTravel = "Dimensional Travel",
        Teleportation = "Teleportation",
    }

    enum CharacterMurmur {
        Ardour = "Ardour",
        Tacet = "Tacet",
        Rhythm = "Rhythm",
    }

    enum CharacterBoon {
        None = "None",
        Autodidact = "Autodidact",
        Gourmet = "Gourmet",
        Maverick = "Maverick",
        Packmule = "Packmule",
        Scrapper = "Scrapper",
        Steadfast = "Steadfast",
        Survivalist = "Survivalist",
        Sly = "Sly",
    }

    enum CharacterFlaw {
        None = "None",
        Deficient = "Deficient",
        Fugitive = "Fugitive",
        Vegetarian = "Vegetarian",
        Glutton = "Glutton",
        Manic = "Manic",
        Haemophilia = "Haemophilia",
        Squeamish = "Squeamish",
        Obvious = "Obvious",
        Simple = "Simple",
        Blind = "Blind",
    }

    //

    enum MantraCategory {
        Combat = "Combat",
        Mobility = "Mobility",
        Support = "Support",
    }

    enum TalentRarity {
        Common = "Common",
        Rare = "Rare",
        Advanced = "Advanced",
    }
}