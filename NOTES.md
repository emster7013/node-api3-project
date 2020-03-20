Just having this here for a mental guid to myself on what I'm needing to do...  ONLY NEED TO DO THE USERS

Write and implement four custom `middleware` functions, detailed below. <- That means 4 CUSTOM MIDDLEWARE FUNCTIONS....4
These are the four you do logger, validateUserId, validateUser, and validatePost

server.use(logger);//pass a reference to it
The three amigas
function logger (req, res, next) {
    log information about the request to the console -> GET to /
    const method = req.method
    console.log(`${method} Request`)
    next();//moves the request to the next middleware
}