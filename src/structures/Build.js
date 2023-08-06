const GetAPIObjects = require('../internal/Get API Objects');

const Mantra = require('./Mantra');
const Outfit = require('./Outfit');
const Talent = require('./Talent');
const Weapon = require('./Weapon');

module.exports = class Build {
    constructor(APIBuild, BuildID) {
        const build = {
            details: {
                id: BuildID,
                title: APIBuild.stats.buildName,
                description: APIBuild.stats.buildDescription,

                author: APIBuild.stats.buildAuthor,
                notes: APIBuild.notes,
            },

            character: {
                race: APIBuild.stats.meta.Race,
                origin: APIBuild.stats.meta.Origin,
                oath: APIBuild.stats.meta.Oath,
                outfit: APIBuild.stats.meta.Outfit,
                resonance: APIBuild.stats.meta.Bell,
                murmur: APIBuild.stats.meta.Murmur,

                power: APIBuild.stats.power,

                boons: [
                    APIBuild.stats.boon1,
                    APIBuild.stats.boon2,
                ],

                flaws: [
                    APIBuild.stats.flaw1,
                    APIBuild.stats.flaw2,
                ],

                traits: {
                    vitality: APIBuild.stats.traits.Vitality,
                    erudition: APIBuild.stats.traits.Erudition,
                    proficiency: APIBuild.stats.traits.Proficiency,
                    songchant: APIBuild.stats.traits.Songchant,
                },
            },

            stats: {
                pre_shrine: {
                    light_weapons: APIBuild.preShrine.weapon["Light Wep."],
                    medium_weapons: APIBuild.preShrine.weapon["Medium Wep."],
                    heavy_weapons: APIBuild.preShrine.weapon["Heavy Wep."],

                    strength: APIBuild.preShrine.base.Strength,
                    fortitude: APIBuild.preShrine.base.Fortitude,
                    agility: APIBuild.preShrine.base.Agility,
                    intelligence: APIBuild.preShrine.base.Intelligence,
                    willpower: APIBuild.preShrine.base.Willpower,
                    charisma: APIBuild.preShrine.base.Charisma,

                    flamecharm: APIBuild.preShrine.attunement.Flamecharm,
                    frostdraw: APIBuild.preShrine.attunement.Frostdraw,
                    thundercall: APIBuild.preShrine.attunement.Thundercall,
                    galebreathe: APIBuild.preShrine.attunement.Galebreathe,
                    shadowcast: APIBuild.preShrine.attunement.Shadowcast,
                    ironsing: APIBuild.preShrine.attunement.Ironsing,
                },

                post_shrine: {
                    light_weapons: APIBuild.attributes.weapon["Light Wep."],
                    medium_weapons: APIBuild.attributes.weapon["Medium Wep."],
                    heavy_weapons: APIBuild.attributes.weapon["Heavy Wep."],

                    strength: APIBuild.attributes.base.Strength,
                    fortitude: APIBuild.attributes.base.Fortitude,
                    agility: APIBuild.attributes.base.Agility,
                    intelligence: APIBuild.attributes.base.Intelligence,
                    willpower: APIBuild.attributes.base.Willpower,
                    charisma: APIBuild.attributes.base.Charisma,

                    flamecharm: APIBuild.attributes.attunement.Flamecharm,
                    frostdraw: APIBuild.attributes.attunement.Frostdraw,
                    thundercall: APIBuild.attributes.attunement.Thundercall,
                    galebreathe: APIBuild.attributes.attunement.Galebreathe,
                    shadowcast: APIBuild.attributes.attunement.Shadowcast,
                    ironsing: APIBuild.attributes.attunement.Ironsing,
                },
            },

            talents: [],
            mantras: [],
            weapon: null,
        };

        APIBuild.talents.forEach(async(talent) => {
            build.talents.push(new Talent(await GetAPIObjects.getAPITalent(talent)));
        });

        APIBuild.mantras.forEach(async(mantra) => {
            build.mantras.push(new Mantra(await GetAPIObjects.getAPIMantra(mantra)));
        });

        if(APIBuild.weapons !== "") {
            let i = [1];
            i.forEach(async(item) => {
                build.weapon = new Weapon(await GetAPIObjects.getAPIWeapon(APIBuild.weapons));
            });
        }

        return build;
    }
};