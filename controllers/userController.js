const User = require('../models/User');

const addUser = async (req, res) =>{
    const resp =await User.create(req.body);
    res.send(resp);
};

const getUsers = async (req, res) =>{
    const resp =await User.findAll();
    res.send(resp);
};


const getUser = async (req, res) =>{
    const resp =await User.findByPk(req.params.id);
    res.send(resp);
};

module.exports = {addUser, getUsers, getUser};