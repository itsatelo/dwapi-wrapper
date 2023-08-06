const GetAPIObjects = require('../internal/Get API Objects');

module.exports = class Talent {
    constructor(APITalent) {
        const talent = {
            name: APITalent.name,
            description: APITalent.desc,
            rarity: APITalent.rarity,
            category: APITalent.category,

            requirements: {
                character: {
                    power: APITalent.reqs.power,
                    weapon_type: APITalent.reqs.weaponType,
                },

                stats: {
                    light_weapons: APITalent.reqs.weapon["Light Wep."],
                    medium_weapons: APITalent.reqs.weapon["Medium Wep."],
                    heavy_weapons: APITalent.reqs.weapon["Heavy Wep."],

                    strength: APITalent.reqs.base.Strength,
                    fortitude: APITalent.reqs.base.Fortitude,
                    agility: APITalent.reqs.base.Agility,
                    intelligence: APITalent.reqs.base.Intelligence,
                    willpower: APITalent.reqs.base.Willpower,
                    charisma: APITalent.reqs.base.Charisma,

                    flamecharm: APITalent.reqs.attunement.Flamecharm,
                    frostdraw: APITalent.reqs.attunement.Frostdraw,
                    thundercall: APITalent.reqs.attunement.Thundercall,
                    galebreathe: APITalent.reqs.attunement.Galebreathe,
                    shadowcast: APITalent.reqs.attunement.Shadowcast,
                    ironsing: APITalent.reqs.attunement.Ironsing,
                }
            },

            stats: []
        };

        if(APITalent.reqs.from !== "") {
            if(APITalent.reqs.from.includes(' Mantra')) {
                talent.requirements.character.mantra = APITalent.reqs.from.split(' Mantra')[0];
            }

            else {
                talent.requirements.character.talent = APITalent.reqs.from;
            }
        }

        if(APITalent.stats !== "N/A") {
            let stats = APITalent.stats.split(', ');
            stats.forEach(stat => {
                talent.stats.push(stat);
            });
        }

        return talent;
    }
};