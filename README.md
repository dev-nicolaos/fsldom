# FSLDOM
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](LICENSE) [![Netlify Status](https://api.netlify.com/api/v1/badges/a71bdc11-116f-463b-994d-27815be634c8/deploy-status)](https://app.netlify.com/sites/fsldom/deploys)

### A fast, simple and lightweight library for manipulating the DOM

## Philosophy
FSLDOM is not an attempt to wrap the majority of the DOM API (à la jQuery). The DOM API is quite extensive and for the most part, easy to use. There simply isn't much need to write wrapper functions for tasks like:
- `elem.hidden = true`
- `elem.style.backgroundColor = '#222222'`
- `elem.classList.add('banana')`

That being said, if you've ever tried to go from a framework/library like jQuery, Angular, or React to vanilla JS, you've may have been frustrated by some of the minutia involved with using the Vanilla DOM functions (typing out document.longFunctionName repeatedly anyone?). These are the types of problems FSLDOM wants to solve.

FSLDOM is also built on the idea that native web platform is a viable and future-proof way to build projects (it's available as an [ES6 module](https://caniuse.com/#feat=es6-module)!) Rather than creating a new system of doing things (the jQuery way, the React way, etc...), FSLDOM is meant to work with standard JavaScript every web developer should learn. If you're using one of the tools mentioned above, you probably don't need FSLDOM as those platforms come with their own solutions for rendering/altering views. FSLDOM is primarily meant for vanilla JS projects.

## Usage
Check out [FSLDOM's Wiki](https://github.com/dev-nicolaos/fsldom/wiki) for Documentation

## License
FSLDOM is an open source library, distributed under the [MIT](./LICENSE) license