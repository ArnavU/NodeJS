const os = require('os');

console.log(os.arch());

let freeMem = os.freemem(); // free memory in bytes
console.log(`Free memory in GB: ${freeMem / 1024 / 1024 / 1024}`);

let totalMemory = os.totalmem();
console.log(`Total memory: ${totalMemory / 1024 / 1024 / 1024}`);

console.log();

console.log(os.platform());
console.log(os.hostname());
console.log(os.type());
console.log(os.tmpdir());
console.log(os.homedir());