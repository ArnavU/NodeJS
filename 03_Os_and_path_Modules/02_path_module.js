// In Node.js, the path module is a built-in module that provides utilities for working with file and directory paths. 

const path = require('path');

console.log(path.dirname("E:/nodejsYoutube/PathModule/myFile.js"));
console.log(path.extname("E:/nodejsYoutube/PathModule/myFile.js"));
console.log(path.basename("E:/nodejsYoutube/PathModule/myFile.js"));

// path.parse() => returns an object with properties: 
//                 root, dir, base, ext, name

const myPath = path.parse("E:/nodejsYoutube/PathModule/myFile.js");
console.log(myPath);

console.log(myPath.name);