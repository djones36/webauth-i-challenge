const express = require('express');
const server = express();
const mw = require('../middleware/globalMiddleware');
const helmet = require('helmet');

const sessions = require('express-session');
const KnexSessionStore = require('connect-session-knex')(sessions);

//Routes imports
const registerRoute = require('./routes/registerRoute');
const loginRoute = require('./routes/loginRoute');
const AuthUserRoute = require('./routes/AuthUserRoute');
server.use(helmet());
server.use(express.json(), mw.logger);

//Routes
server.use('/api/register', registerRoute);
server.use('/api/login', loginRoute);
server.use('/api/users', AuthUserRoute);


//Deployment 
server.get('/', (req, res) => {
    res.status(200).json("Successful Deployment")
})

module.exports = server;