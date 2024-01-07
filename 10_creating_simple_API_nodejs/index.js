// API is a software intermediary that allows two applications to talk to each other. 
// Each you use an app like facebok to send an instant message or check the wheter on your phone, you're using an API
// It is a service which allows to request data from the server

const fs = require('fs');
const http = require("http");

let objData = null;
fs.readFile(`${__dirname}/userapi.json`, "utf8", (err, data) => {
    objData = JSON.parse(data);
});

let server = http.createServer((req, res) => {
    if(req.url == '/') {
        res.end("Hello from the home page");
    }
    else if(req.url == "/about") {
        res.end("Hello from the aboutUs page.");
    }
    else if(req.url == "/contact") {
        res.end("Hello from the contactUs page.");
    }
    else if (req.url == "/userapi") {
        res.writeHead(200, { "content-type": "application/json"});
        console.log(objData[2]);
        // res.end(objData[2]);
        res.end(objData[2].firstname)
    }
    else {
        res.writeHead(404, { "content-type": "text/html"});
        res.end("<h1>404 error page. Page does not exist.");
    }
})

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to port 8000");
})