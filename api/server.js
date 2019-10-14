const express = require('express');
const server = express();
const mw = require('../middleware/globalMiddleware');
const helmet = require('helmet');

//Routes imports
const registerRoute = require('./routes/registerRoute');
const loginRoute = require('./routes/loginRoute');
const userRoute = require('./routes/userRoute');
server.use(helmet());
server.use(express.json(), mw.logger);

//Routes
server.use('/api/register', registerRoute);
server.use('/api/login', loginRoute);
server.use('/api/users', userRoute);



//Deployment 
server.get('/', (req, res) => {
    res.status(200).json("Successful Deployment")
})

module.exports = server;