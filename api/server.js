const express = require('express');
const server = express();
const mw = require('../middleware/globalMiddleware');


server.use(express.json(), mw.logger);

//Routes
// server.use('/api/register', registerRoute);
// server.use('/api/login', loginRoute);
// server.use('/api/user', userRoute);



//Deployment 
server.get('/', (req, res) => {
    res.status(200).json("Successful Deployment")
})

module.exports = server;