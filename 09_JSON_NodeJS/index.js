const bioData = {
    name: "Arnav", 
    age: 20,
    city: "Wardha"
}

console.log(bioData.city);

// converting object to JSON
const jsonData = JSON.stringify(bioData);
console.log(jsonData);

// {"name":"Arnav","age":20,"city":"Wardha"} ==> JSON data

console.log(jsonData.name);

let jsonToObject = JSON.parse(jsonData);
console.log(jsonToObject);

console.log(jsonToObject.name);