const User = require('../models/User');

const addUser = async (req, res) =>{
    const resp =await User.create(req.body); // create is used to add a new record to the User table
    res.send(resp);
};

const getUsers = async (req, res) =>{
    const resp =await User.findAll(); // findAll is used to retrieve all records from the User table
    res.send(resp);
};


const getUser = async (req, res) =>{
    const resp =await User.findByPk(req.params.id); // findByPk is used to find a record by its primary key (id in this case)
    res.send(resp);
};

module.exports = {addUser, getUsers, getUser};