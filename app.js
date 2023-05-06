// npm -global command, comes with node
// npb --version

// local dependency - use it only in this particular project
// npb i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>

// package.json -manifest file(stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init(step by step, press enter to skip)
// npm init -y (everything comes default)

// npm i lodash on terminal
// npm i bootstrap on terminal

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems)