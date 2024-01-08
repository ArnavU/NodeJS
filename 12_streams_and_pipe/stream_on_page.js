const fs = require('fs');
const http = require('http');

let server = http.createServer((req, res) => {
    let readStream = fs.createReadStream("data.txt", "utf8");

    readStream.on('data', (chunk) => {
        res.end(chunk);
    })

    readStream.on("end", () => {
        console.log("Finished reading the file.");
    })

    readStream.on('error', (err) => {
        console.log("Error occured while reading", err);
    })
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to the port 8000");
})