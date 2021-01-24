const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

// TODO: Implement route controllers for user

router.get('/', (req, res) => {
    try {
        console.log(req.body)
        if (!res.err) {
            res.data = UserService.getAllUsers(req.body);
        }
    } catch(err) {
        res.err = err;
        res.err.status = 404;
    }
}, responseMiddleware);

router.get('/:id', (req, res) => {
    try {
        console.log(req.body)
        if (!res.err) {
            res.data = UserService.getOneUser(req.body);
        }
    } catch(err) {
        res.err = err;
        res.err.status = 404;
    }
}, responseMiddleware);

router.post('/', (req, res, next) => {
    try {
        console.log(req.body)
        if (!res.err) {
            res.data = UserService.createUser(req.body);
        }
    } catch(err) {
        res.err = err;
        res.err.status = 404;
    } finally {
        next()
    }
}, responseMiddleware);

router.put('/:id', (req, res) => {
    try {
        console.log(req.body)
        if (!res.err) {
            res.data = UserService.updateUser(req.body);
        }
    } catch(err) {
        res.err = err;
        res.err.status = 404;
    }
});

router.delete('/:id', (req, res) => {
    try {
        console.log(req.body)
        if (!res.err) {
            res.data = UserService.delete(req.body);
        }
    } catch(err) {
        res.err = err;
        res.err.status = 404;
    }
}, responseMiddleware);


module.exports = router;