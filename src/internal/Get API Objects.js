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
};