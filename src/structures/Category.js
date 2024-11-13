const GetAPIObjects = require('../internal/Get API Objects');
const Talent = require('../structures/Talent.js');

module.exports = class Category {
    constructor(APICategory) {
        const category = {
            name: APICategory.name,
            talents: [],
        };

        APICategory.talents.forEach(async(talent) => {
            category.talents.push(talent);
        });

        return category;
    }
};