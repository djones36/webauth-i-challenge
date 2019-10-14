const express = require('express');

const router = express.Router();

const errorRef = require('../../middleware/errorRef');

const Users = require('../helpers/userModel');

const bcrypt = require('bcryptjs');
//Post for user to login to account

router.post('/', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
        .first()
        .then(user => {

            if (user && bcrypt.compareSync(password, user.password)) {
                res.status(200).json({ message: `Welcome ${user.username}!` });
            } else {
                res.status(401).json({ message: 'Invalid Credentials' });
            }
        })
        .catch(error => {
            res.status(500).json(errorRef(error));
        });
})

module.exports = router;