const express = require('express');
const { connectDb } = require('./config/db');
const app = express();
connectDb();

app.listen(4000, ()=>{
    console.log('Server is running on port 4000');
})