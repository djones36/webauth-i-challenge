const express = require('express');

const router = express.Router();

const errorRef = require('../../middleware/errorRef');

const Users = require('../helpers/userModel');

const bcrypt = require('bcryptjs');

//Post for user to login to account
router.post('/', (req, res) => {
    let { username, password } = req.body;
    console.log('session', req.session)
    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                req.session.username = user.username;
                console.log('session login', req.session);
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