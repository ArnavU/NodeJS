let add = function(a, b) {
    return a+b;
}

let sub = function(a, b) {
    return a-b;
}

let multi = function(a, b) {
    return a*b;
}

// if only one object has to be exported
// module.export = add;

// if multiple objects to export
// module.exports.add1 = add;
// module.exports.sub1 = sub;
// module.exports.multi1 = multi;
/* object exported
    {add1: add, sub1: sub, multi1: multi}
*/

// other way to export multiple objects
module.exports = {add, sub, multi};
