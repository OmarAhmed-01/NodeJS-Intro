import mongoose from "mongoose"; //import the mongoose module from mongoose library
const { Schema } = mongoose;

//defining the customer Schema
const customerSchema = new Schema({
    name: String,
    age: Number,
    industry: String
});

const Customer_Model = mongoose.model("Customer", customerSchema); //creating a new Customer collection in the database

export default Customer_Model;