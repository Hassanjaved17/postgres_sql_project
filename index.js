const express = require('express');
const user = require('./routes/user');
const { connectDb, sequelize } = require('./config/db');

const app = express();

app.use(express.json());

app.use('/user', user);

connectDb();

sequelize.sync().then(() => {
    console.log('Table created successfully');

    app.listen(4000, () => {
        console.log('Server is running on port 4000');
    });
});