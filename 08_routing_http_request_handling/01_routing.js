let http = require('http');


const server = http.createServer((req, res) => {
    // console.log(req.url);
    if(req.url == "/") {
        // res.write("Hello from Home side");
        // res.end(); => is necessary to end the response
        res.end("Hello from Home side");
    }
    else if(req.url == '/about') {
        // res.write("Hello from aboutUs side");
        // res.end(); => is necessary to end the response
        res.end("Hello from aboutUs side");
    }
    else if(req.url == '/contact') {
        // res.write("Hello from the contactUs side");
        // res.end(); => is necessary to end the response
        res.end("Hello from the contactUs side");
    }
    else {
        res.writeHeader(404, {"content-type": "text/html"});
        res.end("<h1>404 error. Page does not exist</h1>");
    }
})

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to port no. 8000");
})