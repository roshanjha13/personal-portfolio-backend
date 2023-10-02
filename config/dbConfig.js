const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)

const connection = mongoose.connection;

connection.on('error',()=>{
    console.log('Database Connection Error');
})

connection.on('connected',()=>{
    console.log('Connected to database');
})

module.exports = connection;