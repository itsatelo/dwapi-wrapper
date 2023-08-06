const GetAPIObjects = require('../internal/Get API Objects');

module.exports = class Mantra {
    constructor(APIMantra) {
        const mantra = {
            name: APIMantra.name,
            description: APIMantra.desc,
            
            details: {
                category: APIMantra.category,
                type: APIMantra.category,

                stars: APIMantra.stars,
            },

            requirements: {
                character: {
                    power: APIMantra.reqs.power,
                    weapon_type: APIMantra.reqs.weaponType,
                    talent: APIMantra.reqs.from,
                },

                stats: {
                    light_weapons: APIMantra.reqs.weapon["Light Wep."],
                    medium_weapons: APIMantra.reqs.weapon["Medium Wep."],
                    heavy_weapons: APIMantra.reqs.weapon["Heavy Wep."],

                    strength: APIMantra.reqs.base.Strength,
                    fortitude: APIMantra.reqs.base.Fortitude,
                    agility: APIMantra.reqs.base.Agility,
                    intelligence: APIMantra.reqs.base.Intelligence,
                    willpower: APIMantra.reqs.base.Willpower,
                    charisma: APIMantra.reqs.base.Charisma,

                    flamecharm: APIMantra.reqs.attunement.Flamecharm,
                    frostdraw: APIMantra.reqs.attunement.Frostdraw,
                    thundercall: APIMantra.reqs.attunement.Thundercall,
                    galebreathe: APIMantra.reqs.attunement.Galebreathe,
                    shadowcast: APIMantra.reqs.attunement.Shadowcast,
                    ironsing: APIMantra.reqs.attunement.Ironsing,
                }
            },

            gif: APIMantra.gif,
        };

        return mantra;
    }
};