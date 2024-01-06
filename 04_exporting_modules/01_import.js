// let addSub = require('./02_export')

// console.log(addSub);

// console.log(addSub.add1(5, 5));
// console.log(addSub.sub1(10, 5));

// importing using object destructuring
// order does not matter in nodejs may matter in react? 
let { add, sub, multi } = require('./02_export'); // => object destructuring || use same variables as in the object, otherwise use alias
console.log(add(5, 5));
console.log(sub(10, 5));
console.log(multi(5, 5));