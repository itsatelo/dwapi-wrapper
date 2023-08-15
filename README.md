<div align="center">
    <img src='https://cdn.itsatelo.com/dwapi-wrapper'>
    <hr>
</div>

# Installing
```sh-session
npm i dwapi-wrapper
yarn add dwapi-wrapper
```

# About
The DWAPI-Wrapper is a wrapper for Cyfer's Deepwoken <br>
It provides an ease of access to the majority of the 


## Documentation
The documentation for this package is currently only available within my [Developer Discord Server](https://itsatelo.com/devdisc). In the future, I plan on moving all documentation onto a website, but for now, this will have to do.

## Support
If you need support, the best places do go would be my [Developer Discord](https://itsatelo.com/devdisc), or the [Deepwoken Builder Discord](https://discord.gg/deepwokenbuilder).<br>
Please don't ping Cyfer asking for support with this library though, as it wasn't developed by them.

# Changes
> ### `@1.1.2` -> `@1.2.0`
> - Fixed Typings file (hopefully).
> - Changed method of exports; it now exports an Object rather than a Class.

> ### `@1.2.0` -> `@1.2.1`
> - Hopefully, once again, fixed Typings. I DON'T UNDERSTAND THESE GIVE ME A BREAK!!!

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

# To-Do List
> - Add support for creating builds externally.

<hr>
Thank you for using this, I guess?