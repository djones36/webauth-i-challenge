module.exports = {
    logger,
}

//Logger middleware
function logger(req, res, next) {
    console.log(`${req.method} to ${req.path} at ${new Date().toISOString()}`);
    next();
}


