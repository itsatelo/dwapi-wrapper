export default class API {
    public static ObjectgetBuild(id: string): Promise<BuildObject>;
    public static ObjectgetCategory(name: string): Promise<CategoryObject>;
    public static ObjectgetMantra(name: string): Promise<MantraObject>;
    public static ObjectgetOutfit(name: string): Promise<OutfitObject>;
    public static ObjectgetTalent(name: string): Promise<TalentObject>;
    public static ObjectgetWeapon(name: string): Promise<WeaponObject>;

    public static ObjectgetAllCategories(): Promise<CategoryObject[]>;
    public static ObjectgetAllMantras(): Promise<MantraObject[]>;
    public static ObjectgetAllOutfits(): Promise<OutfitObject[]>;
    public static ObjectgetAllTalents(): Promise<TalentObject[]>;
    public static ObjectgetAllWeapons(): Promise<WeaponObject[]>;
}

export interface BuildObject {
    details: BuildDetailsObject;
    character: BuildCharacterObject;
    stats: BuildStatsObject;

    talents: TalentObject[];
    mantras: MantraObject[];
    weapon: WeaponObject | null;
}

export interface BuildDetailsObject {
    id: string,
    title: string,
    description: string,
    author: string,
    notes: string,
}

export interface BuildCharacterObject {
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

export interface BuildCharacterTraitsObject {
    vitality: number;
    erudition: number;
    proficiency: number;
    songchant: number;
}

export interface BuildStatsObject {
    pre_shrine: StatsObject;
    post_shrine: StatsObject;
}

//

export interface CategoryObject {
    name: string;
    talents: string[];
}

//

export interface MantraObject {
    name: string;
    description: string;

    details: MantraDetailsObject;
    requirements: RequirementsObject;
    gif: string;
}

export interface MantraDetailsObject {
    category: MantraCategory;
    type: MantraCategory;
    stars: string;
}

//

export interface OutfitObject {
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

export interface OutfitResistancesObject {
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

export interface OutfitStatsObject {
    ether_regeneration: string;
    additional_stealth: string;
}

//

export interface TalentObject {
    name: string;
    description: string;
    rarity: TalentRarity;
    category: string;

    requirements: RequirementsObject;
    stats: string[];

    getCategory(): CategoryObject;
}

//

export interface WeaponObject {
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

export interface RequirementsObject {
    character: RequirementsCharacterObject;
    stats: StatsObject;
}

export interface RequirementsCharacterObject {
    power: number,
    weapon_type: string,
    talent?: string | undefined,
    mantra?: string | undefined,
}

export interface StatsObject {
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

export enum CharacterRace {
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

export enum CharacterOrigin {
    Castaway = "Castaway",
    LoneWarrior = "Lone Warrior",
    Deepbound = "Deepbound",
    Voidwalker = "Voidwalker",
}

export enum CharacterOath {
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

export enum CharacterResonance {
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

export enum CharacterMurmur {
    Ardour = "Ardour",
    Tacet = "Tacet",
    Rhythm = "Rhythm",
}

export enum CharacterBoon {
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

export enum CharacterFlaw {
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

export enum MantraCategory {
    Combat = "Combat",
    Mobility = "Mobility",
    Support = "Support",
}

export enum TalentRarity {
    Common = "Common",
    Rare = "Rare",
    Advanced = "Advanced",
}