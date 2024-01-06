// nodeJS have some built-in modules
// one among them is fs

const fs = require('fs');
fs.writeFileSync("read.txt", "Hi this is my first file.");
fs.writeFileSync("read.txt", "Hi this is my second text");

fs.appendFileSync("read.txt", "\nThis is appended text.");