import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'; //importing .env config 
import Customer_Model from './src/models/customerModel.js'; //importing the customer model from the customerModel.js

mongoose.set('strictQuery', false);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//sending the customer info to the database
const customer = new Customer_Model({
    name: "Omar",
    age: 24,
    industry: "Tech"
});

// customer.save(); //save the entry to the atlas

app.get('/', (req, res) => {
    res.send("Welcome!");
})

//GET request that finds searches inside the Customer_Model for customers and saves them as result
//=> respond in json format with the customer result
//add try catch block to catch error
app.get('/api/customers', async(req, res) => {
    try {
        const result  = await Customer_Model.find();
        res.json({"Customers": result});
    } catch (error) {
        console.log(error);
        res.json({error: error.message})    
    }
})

app.post('/', (req, res) => {
    res.send("This is a POST request")
})

app.post('/api/customers', (req,res) => {
    console.log(req.body)
    res.send(req.body)
})

//start function that connects to the MONGODB database using the DATABASE_URI found in the .env file
//after connection log the port listened on and if there is any error catch it 
const start = async() => {
    try {
        await mongoose.connect(process.env.DATABASE_URI);
        app.listen(process.env.PORT, () => {
            console.log(`Server started on http://localhost:${process.env.PORT}`)
        })
    } catch (error) {
        console.log(error.message)    
    }
};

start();