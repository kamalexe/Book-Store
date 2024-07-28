import express from 'express';
import dotenv from "dotenv";

// const express = require('express');
// const dotenv = require('dotenv');
const app = express();
dotenv.config();
const PORT = process.env.PORT ||4000;
// const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})