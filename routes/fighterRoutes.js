const { Router } = require('express');
const FighterService = require('../services/fighterService');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { createFighterValid, updateFighterValid } = require('../middlewares/fighter.validation.middleware');

const router = Router();

// TODO: Implement route controllers for fighter

router.get('/', (req, res, next) => {
    try {
        res.data = FighterService.getAllFighters();
    } catch(err) {
        res.status(500).json({ message: "Something went wrong, try again 111"})
    } finally {
        next()
    }
}, responseMiddleware);

router.get('/:id', (req, res, next) => {
    try {
        res.data = FighterService.getOneFighter({id: req.params.id});
    } catch(err) {
        res.status(500).json({ message: "Something went wrong, try again12"})
    } finally {
        next()
    }
}, responseMiddleware);

router.post('/', (req, res, next) => {
    try {
        res.data = FighterService.createFighter(req.body);
        // if (!res.err) {
        //     res.data = UserService.createUser(req.body);
        // }
    } catch(err) {
        res.status(404).json({error: true, message: res.err.message});
    } finally {
        next()
    }
}, responseMiddleware);

router.put('/:id', (req, res, next) => {
    try {
        res.data = FighterService.updateFighter(req.params.id, req.body);
    } catch(err) {
        res.status(500).json({ message: "Something went wrong, try again2"})
    } finally {
        next()
    }
}, responseMiddleware);

router.delete('/:id', (req, res, next) => {
    try {
        res.data = FighterService.delete(req.params.id);
    } catch(err) {
        res.status(500).json({ message: "Something went wrong, try again1"})
    } finally {
        next()
    }
}, responseMiddleware);

module.exports = router;