const express = require("express");
const mongoose = require('mongoose');
const app = express();
const connectDB = async ()=>{
    mongoose.connect('mongodb://localhost:27017/e-comm');   //our database connnection
    const ProductSchema = new mongoose.Schema({});    //schema to perfome CURD //model check schema in database
    const product = mongoose.model('product', ProductSchema);  //schema to perfome CURD //model check schema in database
    const data = await product.find();
    console.warn(data);

}
connectDB();


app.listen(5000)