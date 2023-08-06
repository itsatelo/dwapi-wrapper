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
The DWAPI-Wrapper is a wrapper for Cyfer's Deepwoken API.<br>
It provides an ease of access to the majority of the API.

## Documentation
The documentation for this package is currently only available within my [Developer Discord Server](https://itsatelo.com/devdisc). In the future, I plan on moving all documentation onto a website, but for now, this will have to do.

## Support
If you need support, the best places do go would be my [Developer Discord](https://itsatelo.com/devdisc), or the [Deepwoken Builder Discord](https://discord.gg/deepwokenbuilder).<br>
Please don't ping Cyfer asking for support with this library though, as it wasn't developed by them.

# Quick Usage
```js
const API = require('dwapi-wrapper');
API.getBuild('id').then(build => console.log(build));
API.getCategory('metamancer').then(category => console.log(category));
API.getMantra('graceful flame').then(mantra => console.log(mantra));
API.getTalent('undying flame').then(talent => console.log(talent));
API.getWeapon('evanspear handaxe').then(weapon => console.log(weapon));
```

# To-Do List
> - Add `./typings/index.d.ts` file.
> - Add support for creating builds externally.

<hr>
Thank you for using this, I guess?