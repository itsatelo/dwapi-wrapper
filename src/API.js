const GetAPIObjects = require('./internal/Get API Objects');

const Build = require('./structures/Build');
const Category = require('./structures/Category');
const Mantra = require('./structures/Mantra');
const Outfit = require('./structures/Outfit');
const Talent = require('./structures/Talent');
const Weapon = require('./structures/Weapon');

class API {
    static async getBuild(id) {
        const APIBuild = await GetAPIObjects.getAPIBuild(id);

        const build = new Build(APIBuild, id);

        build.character.outfit = await API.getOutfit(build.character.outfit);

        return build;
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

    static async getOutfit(name) {
        const APIOutfit = await GetAPIObjects.getAPIOutfit(name);

        return new Outfit(APIOutfit);
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

    //

    static async getAllCategories() {
        let APICategoriesArray = await GetAPIObjects.getAllAPICategories();
        let Categories = [];

        APICategoriesArray.forEach(APICategory => {
            Categories.push(new Category(APICategory));
        });

        return Categories;
    }

    static async getAllMantras() {
        let APIMantrasArray = await GetAPIObjects.getAllAPIMantras();
        let Mantras = [];

        APIMantrasArray.forEach(APIMantra => {
            Mantras.push(new Mantra(APIMantra));
        });

        return Mantras;
    }

    static async getAllOutfits() {
        let APIOutfitsArray = await GetAPIObjects.getAllAPIOutfits();
        let Outfits = [];

        APIOutfitsArray.forEach(APIOutfit => {
            Outfits.push(new Outfit(APIOutfit));
        });

        return Outfits;
    }

    static async getAllTalents() {
        let APITalentsArray = await GetAPIObjects.getAllAPITalents();
        let Talents = [];

        APITalentsArray.forEach(APITalent => {
            Talents.push(new Talent(APITalent));
        });

        return Talents;
    }

    static async getAllWeapons() {
        let APIWeaponsArray = await GetAPIObjects.getAllAPIWeapons();
        let Weapons = [];

        APIWeaponsArray.forEach(APIWeapon => {
            Weapons.push(new Weapon(APIWeapon));
        });

        return Weapons;
    }
};

exports = module.exports = {
    getBuild: API.getBuild,
    getCategory: API.getCategory,
    getMantra: API.getMantra,
    getOutfit: API.getOutfit,
    getTalent: API.getTalent,
    getWeapon: API.getWeapon,

    getAllCategories: API.getAllCategories,
    getAllMantras: API.getAllMantras,
    getAllOutfits: API.getAllOutfits,
    getAllTalents: API.getAllTalents,
    getAllWeapons: API.getAllWeapons,
};