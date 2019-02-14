# FSLDOM [![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](LICENSE)

### A fast, simple and lightweight library for manipulating the DOM

Born out of a frustration from typing out long method names for common DOM tasks, while also not wanting to add the bulk of jQuery. FSLDOM supplies some simple methods (with short names) for creating elements, querying the DOM, and adding content.

## Table of Contents
- [Philosophy](#philosophy)
- [Performance](#performance)
- [Install](#install)
- [Usage](#usage)
  - [Querying the DOM](#querying-the-dom)
  - [Creating Elements](#creating-elements)
  - [Inserting Content](#inserting-content)
- [License](#license)


## Philosophy
FSLDOM is not an attempt to wrap the entire functionality of the DOM API (à la jQuery). The DOM API is quite extensive and for the most part, easy to use. There simply isn't much need to write wrapper funtions for tasks like:
- `elem.hidden = true`
- `elem.style.backgroundColor = '#222222'`
- `elem.classList.add('banana')`

That being said, if you've ever tried to go from using jQuery to vanilla JS, you've probably been frustrated to have to type `document.getElementById()` or `document.querySelector()` instead of just `$()` to get a reference to an element. That's a lot of extra characters. These are the types of problems FSLDOM wants to solve.

FSLDOM is also built on the idea that native web platform is a viable and future-proof way to build projects. Rather than creating a new system of doing things (the jQuery way, the React way, etc...), FSLDOM is meant to work with standard JavaScript every web developer should learn. If you're using a framework like Angular or Vue, you probably don't need FSLDOM as those platforms come with their own solutions for rendering/altering views. FSLDOM is primarily meant for vanilla JS projects.

## Performance

### Size
FSLDOM is extremly lightweight. The minified versions are under 4KB in size.

### Speed
FSLDOM is super fast. Check out these speed comparisons to jQuery, courtesy of [jsPerf](https://jsperf.com)
- [Change the color of an element with a class](https://jsperf.com/fsldom-vs-jquery)
- [Change font styles for all paragraphs](https://jsperf.com/fsldom-vs-jquery/5)
- [Set variable equal to input value](https://jsperf.com/fsldom-vs-jquery/6)
- [Create footer and append it to body](https://jsperf.com/fsldom-vs-jquery/7)


### Loadtime
Feel free to load FSLDOM at runtime (i.e. access it remotely rather than download it). FSLDOM should load very quickly thanks to being hosted on [Netlify's ADN](https://www.netlify.com/features/adn/)

## Install
No mess or fuss here. Three simple options...

  - Option 1: traditional script tag

    `<script src="https://fsldom.org/1.0.0/fsldom.min.js" async></script>`

  - Option 2: use npm

    npm install --save @dev-nicolaos/fsldom

    `const fD = require(@dev-nicolaos/fsldom);`

  - Option 3: load FSLDOM as an EcmaScript module

    `import fD from 'https://fsldom.org/1.0.0/fsldom-es.min.js';`

    OR

    Download [FSLDOM](https://fsldom.org) into your project

    `import fD from 'path/to/fsldom-es.js';`

## Usage
(See the examples folder for samples)

### Querying the DOM
FSLDOM's API closely matches that of the actual DOM, but involves significanly less typing.

- `document.getElementById()` -> `fD.byId()`,
- `document.getElementsByClassName()` -> `fD.byClass()`
- `document.getElementsByTagName()` -> `fD.byTag()`
- `document.querySelector()` -> `fD.query()`
- `document.querySelectorAll()` -> `fD.queryAll()`

`byId` and `querySelector` work exactly the same as they're real DOM counterparts.

`byClass`, `byTag`, and `queryAll` take the same parameters as their counterparts, but return a slightly different result. While the real DOM methods always return a [Node List](https://developer.mozilla.org/en-US/docs/Web/API/NodeList), the FSLDOM methods return a standard JavaScript arrray when elements are found, and return a falsey value (null) if no elements are found.

### Creating Elements
FSLDOM's `fD.newEl()` method greatly extends the `document.createElement()` method.

`fD.newEl()` takes two parameters. The first is a string matching the type of element that will be required (e.g. 'p' -> `<p></p>`)

The second is an optional options object with four optional properties:
- classList (used to set element.className)
- id (used to set element.id)
- html (used to set element.innerHTML)
- text (used to set element.textContent)

Note that if the html property is included, the text property will be ignored. All values should be strings.

`fD.newEl()` returns the newly created element

### Inserting Content
FSLDOM provieds four methods for inserting content into the DOM. These methods wrap the [element.insertAdjacentElement](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement) and [element.insertAdjacentHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML) DOM methods.

-  `fD.before()` (corresponds to 'beforebegin')
-  `fD.prepend()` (corresponds to 'afterbegin')
-  `fD.append()` (corresponds to 'beforeend')
-  `fD.after()` (corresponds to 'afterend')

Each method takes two parameters. The first is the element relative to which the new content will be placed. The second parameter is the new content, either an HTML Element, or a string of HTML.

## License
FSLDOM is an open source library, distributed under the [MIT](./LICENSE) license