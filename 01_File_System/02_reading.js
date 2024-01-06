const fs = require("fs");

const buffer_data = fs.readFileSync("read.txt");

console.log(buffer_data);

// Node.js includes an additional data type called buffer
// (not available in browser's JavaScript.)
// Buffer is mainly used to store binary data,
// while reading from a file or receiving packets over the network.

/*
<Buffer 48 69 20 74 68 69 73 20 69 73 20 6d 79 20 73 65 63 6f 6e 64 20 74 65 78 
74 0a 54 68 69 73 20 69 73 20 61 70 70 65 6e 64 20 74 65 78 74 2e>
*/

const orig_data = buffer_data.toString();
console.log(orig_data);