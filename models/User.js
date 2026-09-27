const {  DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');


const User = sequelize.define( // We export a function that defines the model
    'User',
    {
        // Model attributes are defined here
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            // allowNull defaults to true
        },
    },
    {
        // Other model options go here
    },
);

module.exports = User
