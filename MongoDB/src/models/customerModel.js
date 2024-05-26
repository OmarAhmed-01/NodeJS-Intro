import mongoose from "mongoose"; //import the mongoose module from mongoose library
const { Schema } = mongoose;

//defining the customer Schema and making the properties required
const customerSchema = new Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    industry: {type: String, required: true},
});

const Customer_Model = mongoose.model("customers", customerSchema); //creating a new Customer collection in the database

export default Customer_Model;