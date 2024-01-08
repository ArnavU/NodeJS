const fs = require('fs');

let streamData = fs.createReadStream('data.txt', "utf8");

streamData.on("data", (chunk) => {
    console.log("Reading chunk: ", chunk, "\n\n");
})

streamData.on("end", () => {
    console.log("Finished reading the file");
})

streamData.on("error", (err) => {
    console.log(`Some error occured: ${err}`);
})