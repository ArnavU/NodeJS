let validator = require('validator');
let chalk = require("chalk");

let isValid = validator.isEmail("arnav@gmail.com")
console.log(isValid ? chalk.bgGreen(isValid) : chalk.bgRed(isValid));
