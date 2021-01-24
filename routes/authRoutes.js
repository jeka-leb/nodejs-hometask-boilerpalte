const { Router } = require('express');
const AuthService = require('../services/authService');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

router.post('/login', (req, res, next) => {
    try {
        // TODO: Implement login action (get the user if it exist with entered credentials)
        res.data = AuthService.login(req.body);
        console.log( res.data);
    } catch (err) {
        res.err = err;
        res.err.status = 404;
    } finally {
        next();
    }
}, responseMiddleware);

module.exports = router;