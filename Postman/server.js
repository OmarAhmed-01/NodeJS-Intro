const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const JSON = {
    "name": "Omar Ahmed",
    "Industry": "Engineering",
    "favouriteNumbers": [
        7,
        11,
        9,
        69
    ],
    "favouriteFood": [
        {
            "name": "Apple",
            "type": "Fruit"
        },
        {
            "name": "Mango",
            "type": "Fruit"
        }
    ]
};

const customers = [
    {
        "name":"O",
        "industry":"Engineering"
    },
    {
        "name":"R",
        "industry":"Software"
    },
]

app.get('/', (req, res) => {
    res.send("This is a GET request");
})

app.get('/api/customers', (req, res) => {
    res.send({"Customers": customers});
})

app.post('/', (req, res) => {
    res.send("This is a POST request")
})

app.post('/api/customers', (req,res) => {
    console.log(req.body)
    res.send(req.body)
})

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`)
})

//by installing nodemon, the server now automatically restarts each time a change has been made 
//by using postman you can now also view the post request made