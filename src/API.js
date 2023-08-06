const GetAPIObjects = require('./internal/Get API Objects.js');

const Build = require('./structures/Build');
const Category = require('./structures/Category');
const Mantra = require('./structures/Mantra');
const Talent = require('./structures/Talent');
const Weapon = require('./structures/Weapon');

exports = module.exports = class API {
    static async getBuild(id) {
        const APIBuild = await GetAPIObjects.getAPIBuild(id);

        return new Build(APIBuild, id);
    }

    static async getCategory(name) {
        const APICategory = await GetAPIObjects.getAPICategory(name);

        const category = new Category(APICategory);

        return category;
    }

    static async getMantra(name) {
        const APIMantra = await GetAPIObjects.getAPIMantra(name);

        return new Mantra(APIMantra);
    }

    static async getTalent(name) {
        const APITalent = await GetAPIObjects.getAPITalent(name);

        const talent = new Talent(APITalent);
        talent.getCategory = function() {
            return API.getCategory(talent.category);
        };

        return talent;
    }

    static async getWeapon(name) {
        const APIWeapon = await GetAPIObjects.getAPIWeapon(name);

        return new Weapon(APIWeapon);
    }
};