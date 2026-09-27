const User = require('../models/User');

const addUser = async (req, res) => {
    const resp = await User.create(req.body); // create is used to add a new record to the User table
    res.send(resp);
};

const getUsers = async (req, res) => {
    const resp = await User.findAll(); // findAll is used to retrieve all records from the User table
    res.send(resp);
};


const getUser = async (req, res) => {
    const resp = await User.findByPk(req.params.id); // findByPk is used to find a record by its primary key (id in this case)
    res.send(resp);
};
const updateUser = async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).send({ message: 'User not found' });

    await user.update(req.body); // updates in place and refreshes the instance
    res.send(user); // full updated object
};

const deleteUser = async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).send({ message: 'User not found' });

    await user.destroy(); // remove from DB
    res.send(user); // instance still holds the data in memory, even though the row is gone
};

module.exports = { addUser, getUsers, getUser, updateUser, deleteUser }; 