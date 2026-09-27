const express = require('express');
const user = require('./routes/user');
const { connectDb, sequelize } = require('./config/db');

const app = express(); // Create an instance of the Express application

app.use(express.json()); // Middleware to parse incoming JSON requests

app.use('/user', user); // Use the user routes for any requests to /user

connectDb(); // Connect to the database

sequelize.sync().then(() => { // Sync the models with the database, creating tables if they don't exist
    console.log('Table created successfully');

    app.listen(4000, () => {
        console.log('Server is running on port 4000');
    });
});