const express = require('express')
const dotenv = require('dotenv').config()
const dbConfig = require('./config/dbConfig')

const app = express()

const  port = process.env.PORT;

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})