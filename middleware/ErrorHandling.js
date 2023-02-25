function errorHandling(err, req, res, next) {
    if(err){
        let status = err.status || 500;
        res.status(status).json(
            {
                status: status,
                err: "Oops an Error has Occurred, Please Try Again Later..."
            }
        )
    }
    next();
}
module.exports = {errorHandling};