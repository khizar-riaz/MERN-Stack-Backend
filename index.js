const express = require("express");
const mongoose = require("mongoose");
const app = express();
const connectDB = async () => {
  mongoose.connect("mongodb://127.0.0.1:27017/e-comm"); //our database connnection instead of localhost type 127.0.0.1 as ipv4

  const ProductSchema = new mongoose.Schema({}); //schema to perfome CURD //model check schema in database
  const product = mongoose.model("product", ProductSchema); //schema to perfome CURD //model check schema in database
  const data = await product.find();
  console.warn(data);
};
connectDB();

app.listen(5000);


