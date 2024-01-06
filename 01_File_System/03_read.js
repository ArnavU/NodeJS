const fs = require('fs');

// first create a file before rename
// fs.writeFileSync('newFile.txt', "");

// renaming the 'newFile.txt' file
fs.renameSync('newFile.txt', "oldFile.txt");