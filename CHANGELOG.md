# FSLDOM Changelog

### 2.0.0
##### Project Structure
- Refactored src/ to use ES6 modules, bundled with Rollup for distribution
- Prep for Node native support of ESM in package.json
  - set `"type"` to `"module"`
  - update `"main"` to point at `"src/fsldom.js"`
  - removed `"module"` field
- Replace unmaintained uglify-es with rollup-plugin-terser for minification
- Moved getting started and usage docs from README to wiki
- Move releases into version specific folders in dist
- Add npm scripts for prettier, rollup
##### API
- Improved clarity in console.error/warn/info messages
- byTag, byClass, queryAll now return an empty array instead of null when no elements are found
- newEl:
  - options.classList can be an array of classes
  - options parameter can accept data property to create data attributes on element
  - options parameter can accept listeners property to assign event listeners to element
  - options parameter can accept alt and src properties for `<img>` elements
  - options parameter can accept href and target properties for `<a>` elements
- Insertion functions (before, prepend, append, after):
  - Target parameter can alternatively be a selector string instead of an HTML element
  - Return a Boolean to indicate whether insertion was successful
- Consumption
  - non-es-module bundles no longer export a CommonJS module, just create a global `fD` variable


### 1.0.2
- Small fix in [README.md](./README.md)


### 1.0.1
- Minor tweaks to examples and [README.md](./README.md)
- Create CHANGELOG


### 1.0.0
Initial Release