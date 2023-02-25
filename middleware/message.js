function message(req, res, next) {
    console.log("Message is Coming From the Middleware!!!!")
    next();
}

module.exports = {message};