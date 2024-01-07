/*
Task: 
    1. convert the object to JSON
    2. add this JSON data to other file
    3. readfile
    4. again convert back JSON data to object
    5. console.log()
*/

const fs = require('fs');

let obj = {
    name: "Arnav", 
    age: 20,
    city: "Wardha"
}
// 1. Convert object to JSON 
const jsonData = JSON.stringify(obj);

// 2. add this JSON data to other file
fs.writeFile("json1.json", jsonData, (err) => {
    if(err) {
        console.log(`Error: ${err} in writing file.`);
    }
    else {
        console.log("Successfully created file");
    }
})

// 3. readfile
fs.readFile("json1.json", "utf8", (err, data) => {
    if(err) {
        console.log(`Error: ${err} reading file`);
    }
    else {
        console.log("Reading file: " + data);

        // 4. again convert back JSON data to object
        const origData = JSON.parse(data);
        
        // 5. console.log()
        console.log("Original Data: ", origData);
    }
})

