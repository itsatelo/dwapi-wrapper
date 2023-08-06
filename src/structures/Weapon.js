module.exports = class Weapon {
    constructor(APIWeapon) {
        const weapon = {
            name: null,
            type: APIWeapon.type,

            damage: APIWeapon.damage,
            damage_types: [],
            penetration: APIWeapon.pen,
            chip: APIWeapon.chip,
            weight: APIWeapon.weight,
            range: APIWeapon.range,
            swing_speed: APIWeapon.speed,
            endlag: APIWeapon.endlag,

            scaling: {},
            requirements: {
                light_weapons: APIWeapon.reqs.weapon["Light Wep."],
                medium_weapons: APIWeapon.reqs.weapon["Medium Wep."],
                heavy_weapons: APIWeapon.reqs.weapon["Heavy Wep."],

                strength: APIWeapon.reqs.base.Strength,
                fortitude: APIWeapon.reqs.base.Fortitude,
                agility: APIWeapon.reqs.base.Agility,
                intelligence: APIWeapon.reqs.base.Intelligence,
                willpower: APIWeapon.reqs.base.Willpower,
                charisma: APIWeapon.reqs.base.Charisma,

                flamecharm: APIWeapon.reqs.attunement.Flamecharm,
                frostdraw: APIWeapon.reqs.attunement.Frostdraw,
                thundercall: APIWeapon.reqs.attunement.Thundercall,
                galebreathe: APIWeapon.reqs.attunement.Galebreathe,
                shadowcast: APIWeapon.reqs.attunement.Shadowcast,
                ironsing: APIWeapon.reqs.attunement.Ironsing,
            }
        };

        if(APIWeapon.name.includes(" (Bleed)")) {
            weapon.name = APIWeapon.name.split(" (Bleed)")[0];
        }

        APIWeapon.damageType.split(" + ").forEach(damage_type => {
            weapon.damage_types.push(damage_type);
        });

        Object.keys(APIWeapon.scaling).forEach(key => {
            if(key === 'Heavy Wep.') weapon.scaling.heavy_weapons = APIWeapon.scaling[key];
            else if(key === 'Medium Wep.') weapon.scaling.medium_weapons = APIWeapon.scaling[key];
            else if(key === 'Light Wep.') weapon.scaling.light_weapons = APIWeapon.scaling[key];

            else {
                weapon.scaling[key.toLowerCase()] = APIWeapon.scaling[key];
            }
        });

        return weapon;
    }
};