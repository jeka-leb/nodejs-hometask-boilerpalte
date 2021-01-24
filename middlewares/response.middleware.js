const responseMiddleware = (req, res, next) => {
    // TODO: Implement middleware that returns result of the query
    if (res.err) {
        let statusErr = res.err.status || 400;
        console.log(statusErr, res.err.message)
        res.status(statusErr).json({error: true, message: res.err.message});
    } else {
        res.status(200).send(res.data);
    }
    next();
}

exports.responseMiddleware = responseMiddleware;