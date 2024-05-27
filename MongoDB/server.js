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

//GET request that takes an id parameter and finds the customer with this id 
//then displays that customer
app.get('/api/customers/:id', async(req, res) => {
    console.log({
        requestParams: req.params,
        requestQuery: req.query
    });
    try {
        const customerID = req.params.id;
        console.log("Customer ID: "+ customerID);

        const customer = await Customer_Model.findById(customerID);
        console.log(customer);

        if(!customer){
            return res.status(404).json({error: "User Not Found"})
        }
        else{
            res.status(200).json({customer})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error" });
    }
})

//PUT request that takes an req body input and updated the existing 
//customer with the new data
app.put('/api/customers/:id', async(req, res) => {
    try {
        const customerID = req.params.id;
        const result = await Customer_Model.replaceOne({_id: customerID}, req.body);
        console.log(result);
        res.json({success: true, message: "Updated Customers Successfully", updatedCount: result.modifiedCount});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error Updating Customer"});
    }
})

//DELETE request that takes the id of the customer to be deleted
app.delete('/api/customers/:id', async(req, res) => {
    try {
        const customerID = req.params.id;
        const result = await Customer_Model.deleteOne({_id: customerID});
        res.json({success: true, message: "Deleted Customer Successfully", deletedCount: result.deletedCount});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Failed to Delete Customer"})
    }
})

//POST request that takes the data from the body of the request
//create new customer model called customer
app.post('/api/customers', async(req,res) => {
    const customer = new Customer_Model(req.body);
    try {
        await customer.save();
        res.json({success: true, customer: customer});
    } catch (error) {
        res.json({success: false, message: "Error posting customer", error: error.message});
    }
    
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