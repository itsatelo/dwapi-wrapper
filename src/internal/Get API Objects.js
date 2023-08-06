const axios = require('axios');
const domain = 'https://146.190.212.30/api';

module.exports = class GetAPIObjects {
    static async getAPIBuild(id) {
        const APIBuild = (await axios.get(`${domain}/build?id=${id}`)).data;
        if(APIBuild.status !== "success") return null;

        return APIBuild.content;
    }

    static async getAPICategory(name) {
        const APICategory = (await axios.get(`${domain}/get?type=category&name=${name}`)).data;
        if(APICategory.status !== "success") return null;

        return APICategory.content;
    }

    static async getAPIMantra(name) {
        const APIMantra = (await axios.get(`${domain}/get?type=mantra&name=${name}`)).data;
        if(APIMantra.status !== "success") return null;

        return APIMantra.content;
    }

    static async getAPIOutfit(name) {
        const APIOutfit = (await axios.get(`${domain}/get?type=outfit&name=${name}`)).data;
        if(APIOutfit.status !== "success") return null;

        return APIOutfit.content;
    }

    static async getAPITalent(name) {
        const APITalent = (await axios.get(`${domain}/get?type=talent&name=${name}`)).data;
        if(APITalent.status !== "success") return null;

        return APITalent.content;
    }

    static async getAPIWeapon(name) {
        const APIWeapon = (await axios.get(`${domain}/get?type=weapon&name=${name}`)).data;
        if(APIWeapon.status !== "success") return null;

        return APIWeapon.content;
    }

    //

    static async getAllAPICategories() {
        const APICategoriesObject = (await axios.get(`${domain}/get?type=category&name=all`)).data.content;
        const APICategoriesArray = [];

        Object.values(APICategoriesObject).forEach(value => {
            APICategoriesArray.push(value);
        });

        return APICategoriesArray;
    }

    static async getAllAPIMantras() {
        const APIMantrasObject = (await axios.get(`${domain}/get?type=mantra&name=all`)).data.content;
        const APIMantrasArray = [];

        Object.values(APIMantrasObject).forEach(value => {
            APIMantrasArray.push(value);
        });

        return APIMantrasArray;
    }

    static async getAllAPIOutfits() {
        const APIOutfitsObject = (await axios.get(`${domain}/get?type=outfit&name=all`)).data.content;
        const APIOutfitsArray = [];

        Object.values(APIOutfitsObject).forEach(value => {
            APIOutfitsArray.push(value);
        });

        return APIOutfitsArray;
    }

    static async getAllAPITalents() {
        const APITalentsObject = (await axios.get(`${domain}/get?type=talent&name=all`)).data.content;
        const APITalentsArray = [];

        Object.values(APITalentsObject).forEach(value => {
            APITalentsArray.push(value);
        });

        return APITalentsArray;
    }

    static async getAllAPIWeapons() {
        const APIWeaponsObject = (await axios.get(`${domain}/get?type=weapon&name=all`)).data.content;
        const APIWeaponsArray = [];

        Object.values(APIWeaponsObject).forEach(value => {
            APIWeaponsArray.push(value);
        });

        return APIWeaponsArray;
    }
};