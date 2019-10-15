const express = require('express');

const router = express.Router();

const errorRef = require('../../middleware/errorRef');

// const Users = require('../helpers/userModel')

//Logout user
router.get('/', (req, res) => {
    if (req.session) {
        req.session.destroy(err => {
            res.status(200).json({
                message: 'you logged out'
            })
        })
    } else {
        res.status(200).json({ message: "you are already logged out!" })
    }
})

module.exports = router;