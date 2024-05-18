const express = require("express"); //import the express library
const PORT = 4000; //define a port number
const app = express();

app.get("/", (req, res) => {
  res.send("This is a GET request"); //GET a response with "This is a GET request"
});

app.post("/", (req, res) => {
  res.send("This is a POST request"); //sends a POST request and the server responds with "This is a POST request"
});

app.listen(PORT, () => {
  console.log(`Server Started on Port ${PORT}`); //server start listening on the PORT for any changes
});
//if you open http://localhost:4000 you will notice that only the GET request is appearing on the screen, 
//thats because the Browser defaults to GET and will ignore the POST request in that case
