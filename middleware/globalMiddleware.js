const Projects = require('../database/helpers/projectModel')

module.exports = {
    logger,
    validateProjId,
}

//Logger middleware
function logger(req, res, next) {
    console.log(`${req.method} to ${req.path} at ${new Date().toISOString()}`);
    next();
}


