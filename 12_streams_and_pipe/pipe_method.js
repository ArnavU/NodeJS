const fs = require('fs');
const http = require('http');

let server = http.createServer((req, res) => {
    let rStream = fs.createReadStream('data.txt', 'utf8');

    // rStream.pipe(process.stdout)
    rStream.pipe(res);
})

server.listen(8000, '127.0.0.1', () => {
    console.log("Listening to port 8000 lol");
})

