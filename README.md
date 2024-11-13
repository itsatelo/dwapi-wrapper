<div align="center">
    <h2>dwapi-wrapper</h2>
    <hr>
</div>

# Installing
```sh-session
npm i dwapi-wrapper
yarn add dwapi-wrapper
```

# About
dwapi-wrapper is a package meant to allow you to utilize Cyfer's Deepwoken API easily.<br>
Cyfer is cool.

# Dev Note
*Heyyyyy*, so I forgot about this package to be honest, especially after v3 of the builder dropped. But hey, I fixed my mistakes!<br>
Uhhh, there is a minor issue with Cyfer's API at the moment where it just ignores apostrophes (so you can't get talents like Wyvern's Claw), this has already been brought up to her and should be fixed whenever.

# Changelog
**2.0.0**
> - Added support for Bloodrend.
> - Added support for Lifeweave (currently not supported by the builder, but added (hopefully) to get a head start).
> - Added support for all the new Oaths, Resonances, etc.
> - Fixed inability to connect to API due to API changes.


# Quick Usage
```js
const { getBuild, getCategory, getMantra, /* ... etc */ } = require('dwapi-wrapper');
getBuild('id').then(build => console.log(build));
getCategory('metamancer').then(category => console.log(category));
getMantra('graceful flame').then(mantra => console.log(mantra));
getOutfit('black diver').then(outfit => console.log(outfit));
getTalent('undying flame').then(talent => console.log(talent));
getWeapon('evanspear handaxe').then(weapon => console.log(weapon));

getAllCategories().then(categories => console.log(categories));
getAllMantras().then(mantras => console.log(mantras));
getAllOutfits().then(outfits => console.log(outfits));
getAllTalents().then(talents => console.log(talents));
getAllWeapons().then(weapons => console.log(weapons));
```

## Want to go in raw?
Be my guest.
```js
const axios = require('axios');
(async() => {
    console.log(await axios.get(`https://api.deepwoken.co/get?type=talent&name=Undying Flame`));
    // if the status isn't 200, it failed
})();

// for builds, the endpoint should be https://api.deepwoken.co/build?id=YOUR_ID_HERE
```

<hr>
Thank you for using this, I guess?