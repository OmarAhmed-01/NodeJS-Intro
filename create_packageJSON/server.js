const { v4: uuid } = require("uuid")

const http = require ('http'); //app imports Node's web server module 
const port = 4000; //assign a port 

const server = http.createServer((req, res) => {    //the code now uses the http.createServer to create a web server
    res.writeHead(200, {'Content-Type': "text/plain"})  //the server responds to the request made with status code 200 (OK) and sets the content type sent as text/plain in this case "Hello World"
    res.end("Hello World");
});

server.listen(port); //Now the server listens to the port we assigned in line 2 for HTTP request
console.log(`server started on port ${port}`) //logs at which port this connection is initiated

