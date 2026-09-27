const express = require('express');
const router = express.Router();
const {getUser,addUser, getUsers} = require('../controllers/userController')

router.post('/', addUser) // Add a new user
router.get('/', getUsers) // Get all users
router.get('/:id', getUser) // Get a user by ID




module.exports = router;