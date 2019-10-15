const express = require('express');

const router = express.Router();

const errorRef = require('../../middleware/errorRef');

const Users = require('../helpers/userModel')

//Get request to display all users


router.get('/', (req, res) => {
    Users.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.status(500).json({ message: 'failed to get user data' })
        })
})

module.exports = router;