// npm - global command comes with 

//npm --version

//local dependency - use it only in this particular project

//npm i <packageName>

//global dependency - use it in any project

//npm install -g <packageName>
//sudo ... (mac it seems but might even work in linux)

// all installations would be including the dependencies in package json once you publish your own scripts and packages in the npm, 
// it also creates the dependencies for you in node_modules folder with all the dependencies, even the dependencies of the dependencies
// also the package.json would not give the secondary dependencies


const _ = require('lodash')

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items)

console.log(newItems);