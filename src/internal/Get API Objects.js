const axios = require('axios');
const domain = 'https://api.deepwoken.co';

module.exports = class GetAPIObjects {
    static async getAPIBuild(id) {
        const APIBuild = (await axios.get(`${domain}/build?id=${id}`).catch(err => {
            return {
                status: 404,
            };
        }));
        if(APIBuild.status !== 200) return null;

        return APIBuild.content;
    }

    static async getAPICategory(name) {
        const APICategory = (await axios.get(`${domain}/get?type=category&name=${name}`).catch(err => {
            return {
                status: 404,
            };
        }));
        if(APICategory.status !== 200) return null;

        return APICategory.content;
    }

    static async getAPIMantra(name) {
        const APIMantra = (await axios.get(`${domain}/get?type=mantra&name=${name}`).catch(err => {
            return {
                status: 404,
            };
        }));
        if(APIMantra.status !== 200) return null;

        return APIMantra.content;
    }

    static async getAPIOutfit(name) {
        const APIOutfit = (await axios.get(`${domain}/get?type=outfit&name=${name}`).catch(err => {
            return {
                status: 404,
            };
        }));
        if(APIOutfit.status !== 200) return null;

        return APIOutfit.data;
    }

    static async getAPITalent(name) {
        const APITalent = (await axios.get(`${domain}/get?type=talent&name=${name}`).catch(err => {
            return {
                status: 404,
            };
        }));
        if(APITalent.status !== 200) return null;

        return APITalent.data;
    }

    static async getAPIWeapon(name) {
        const APIWeapon = (await axios.get(`${domain}/get?type=weapon&name=${name}`).catch(err => {
            return {
                status: 404,
            };
        }));
        if(APIWeapon.status !== 200) return null;

        return APIWeapon.data;
    }

    //

    static async getAllAPICategories() {
        const APICategoriesObject = (await axios.get(`${domain}/get?type=category&name=all`)).data;
        const APICategoriesArray = [];

        Object.values(APICategoriesObject).forEach(value => {
            APICategoriesArray.push(value);
        });

        return APICategoriesArray;
    }

    static async getAllAPIMantras() {
        const APIMantrasObject = (await axios.get(`${domain}/get?type=mantra&name=all`)).data;
        const APIMantrasArray = [];

        Object.values(APIMantrasObject).forEach(value => {
            APIMantrasArray.push(value);
        });

        return APIMantrasArray;
    }

    static async getAllAPIOutfits() {
        const APIOutfitsObject = (await axios.get(`${domain}/get?type=outfit&name=all`)).data;
        const APIOutfitsArray = [];

        Object.values(APIOutfitsObject).forEach(value => {
            APIOutfitsArray.push(value);
        });

        return APIOutfitsArray;
    }

    static async getAllAPITalents() {
        const APITalentsObject = (await axios.get(`${domain}/get?type=talent&name=all`)).data;
        const APITalentsArray = [];

        Object.values(APITalentsObject).forEach(value => {
            APITalentsArray.push(value);
        });

        return APITalentsArray;
    }

    static async getAllAPIWeapons() {
        const APIWeaponsObject = (await axios.get(`${domain}/get?type=weapon&name=all`)).data;
        const APIWeaponsArray = [];

        Object.values(APIWeaponsObject).forEach(value => {
            APIWeaponsArray.push(value);
        });

        return APIWeaponsArray;
    }
};