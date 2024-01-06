const chalk = require('chalk');

// Change background color
const backgroundColorText = chalk.white.bgRed(' This has a blue background. ');

// Combine with foreground color
const coloredText = chalk.black.bgGreen(' This has blue text on a yellow background. ');

// Output the text
console.log(backgroundColorText);
console.log(coloredText);

console.log(chalk.redBright("My name is Arnav"));
console.log(chalk.greenBright("My name is Arnav"));