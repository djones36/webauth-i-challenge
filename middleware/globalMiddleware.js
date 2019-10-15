module.exports = {
    logger,
    restricted,
}

//Logger middleware
function logger(req, res, next) {
    console.log(`${req.method} to ${req.path} at ${new Date().toISOString()}`);
    next();
}

//restricted auth route
function restricted(req, res, next) {
    if (req.session && req.session.username) {
        next();
    } else {
        res.status(400).json({ message: 'Restricted access, login required' });
    }
};

