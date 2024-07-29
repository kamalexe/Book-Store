import express from 'express';
import dotenv from "dotenv";
import mongoose from 'mongoose';
import bookRoute from "./route/book.route.js"
import cors from "cors";
// const express = require('express');
// const dotenv = require('dotenv');
const app = express();
app.use(cors());
dotenv.config();
const PORT = process.env.PORT ||4000;
// const port = 3000
const URI = process.env.MongoDBURI;

//Connnet to mongodb server
try{

mongoose.connect(URI,{useNewUrlParser:true,useUnifiedTopology:true});
console.log("connected to mongodb");
}catch(errror){
console.log(errror)
}

app.use("/book",bookRoute)
app.use("/free",bookRoute)
//define routes
// app.use("/book",bookRouter);
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})