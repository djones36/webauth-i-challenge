const express = require('express');

const router = express.Router();

const errorRef = require('../../middleware/errorRef');

const Users = require('../helpers/userModel')

const restricted = require('../../middleware/restrictedMiddleware');
//Get request to display all users


router.get('/', restricted, (req, res) => {
    console.log('username', req.session.username);
    Users.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.status(500).json(errorRef(err), { message: 'failed to get user data' })
        })
})

module.exports = router;