const express = require('express');
const server = express();
const mw = require('../middleware/globalMiddleware');
const helmet = require('helmet');

const sessions = require('express-session');
const KnexSessionStore = require('connect-session-knex')(sessions);
const knexConfig = require('../database/dbConfig');

const sessionConfiguration = {
    name: 'cookieGood',
    secret: 'keep it secret, keep it safe!',
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60,
        secure: false,
    },
    resave: false,
    saveUninitialized: true,
    store: new KnexSessionStore({
        knex: knexConfig,
        createtable: true,
        clearInterval: 1000 * 60 * 30,
    }),
};



//Routes imports
const registerRoute = require('./routes/registerRoute');
const loginRoute = require('./routes/loginRoute');
const AuthUserRoute = require('./routes/AuthUserRoute');
const logoutRoute = require('./routes/logoutRoute');

server.use(helmet());
server.use(express.json(), mw.logger);
server.use(sessions(sessionConfiguration));

//Routes
server.use('/api/register', registerRoute);
server.use('/api/login', loginRoute);
server.use('/api/users', AuthUserRoute);
server.use('/api/logout', logoutRoute);


//Deployment 
server.get('/', (req, res) => {
    res.status(200).json("Successful Deployment")
})

module.exports = server;