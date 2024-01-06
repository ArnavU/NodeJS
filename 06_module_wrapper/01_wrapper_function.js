// the npm is initialized in this folder and the entry point is this file so "npx nodemon" command can be used here

// In Node.js, the module wrapper is a set of code that surrounds the contents of a Node.js module.

// more in readme.md file

// Inside mymodule.js
console.log(__filename);  // Full path to the current module file
console.log(__dirname);   // Full path to the directory of the current module

// Exporting a function as part of the public API
exports.myFunction = function() {
  console.log('This is my function in the module.');
};