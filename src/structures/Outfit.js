module.exports = class Outfit {
    constructor(APIOutfit) {
        const outfit = {
            name: APIOutfit.name,
            durability: APIOutfit.durability,
            resistances: {
                physical_resistance: APIOutfit.resistances["Physical Resistance"],
                slash_resistance: APIOutfit.resistances["Slash Resistance"],
                blunt_resistance: APIOutfit.resistances["Blunt Resistance"],
                elemental_resistance: APIOutfit.resistances["Elemental Resistance"],
                flame_resistance: APIOutfit.resistances["Flame Resistance"],
                ice_resistance: APIOutfit.resistances["Ice Resistance"],
                thunder_resistance: APIOutfit.resistances["Thunder Resistance"],
                wind_resistance: APIOutfit.resistances["Wind Resistance"],
                shadow_resistance: APIOutfit.resistances["Shadow Resistance"],
            },

            stats: {
                ether_regeneration: APIOutfit.extra["Ether Regen"],
                additional_stealth: APIOutfit.extra["Extra Stealth"],
            },

            talent: APIOutfit.talent,
            requirements: {
                character: {
                    power: APIOutfit.requirements.Power,
                    weapon_type: "",
                },

                stats: {
                    light_weapons: 0,
                    medium_weapons: 0,
                    heavy_weapons: 0,

                    strength: APIOutfit.requirements.Strength,
                    fortitude: APIOutfit.requirements.Fortitude,
                    agility: APIOutfit.requirements.Agility,
                    intelligence: APIOutfit.requirements.Intelligence,
                    willpower: APIOutfit.requirements.Willpower,
                    charisma: APIOutfit.requirements.Charisma,

                    flamecharm: 0,
                    frostdraw: 0,
                    thundercall: 0,
                    galebreathe: 0,
                    shadowcast: 0,
                    ironsing: 0,
                }
            },

            crafting_materials: [],
            notes: APIOutfit.notes,

            image: APIOutfit.image,
        };

        APIOutfit.mats.split(", ").forEach(material => {
            outfit.crafting_materials.push(material);
        });

        return outfit;
    }
}