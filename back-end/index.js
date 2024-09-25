const express = require("express");
const mongoose = require('mongoose');
const app = express();
const connectDB = () => {
    mongoose.connect('mongodb://localhost:27017/employees');
    const productSchema = new mongoose.Schema({});
    const product = mongoose.model('managers', productSchema);
    const data =await.managers.find();
    console.log(data);
}
connectDB();
app.listen(5000);