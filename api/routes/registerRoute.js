const express = require('express');
const Users = require('../helpers/userModel');
const router = express.Router();
const bcrypt = require('bcryptjs');
const errorRef = require('../../middleware/errorRef');

//Post for user to create a new user account
router.post('/', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;

    Users.add(user)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(500).json(errorRef(error), { message: 'failed to create account' });
        });
})

module.exports = router;