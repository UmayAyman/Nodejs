// const simple2 = require('./modulesecond.mjs')    //.mjs for es6 module    // "type" : "module",


// import simple23 from './modulesecond.mjs'; //we can use more than 1 import here
// simple23();

import * as a2 from './modulesecond.mjs'; //* can import all functions
console.log(a2.simple())       //a2.simple is returning simple2 is complex