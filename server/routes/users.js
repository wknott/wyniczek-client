const express = require('express')
const router = express.Router()
const userService = require('../services/users');

router.post('/authenticate', authenticate);
router.post('/register', register);
router.get('/', getAll);
router.get('/:id', getById);

function authenticate(req, res, next) {
  userService.authenticate(req.body)
    .then(user => user ? res.json(user) : res.status(400).json({ message: 'Nazwa użytkownika albo hasło jest niepoprawne.' }))
    .catch(err => next(err));
}

function register(req, res, next) {
  userService.create(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function getAll(req, res, next) {
  userService.getAll()
    .then(users => res.json(users))
    .catch(err => next(err));
}

function getById(req, res, next) {
  userService.getById()
    .then(user => user ? res.json(user) : res.status(400).json({ message: 'Nie znaleziono użytkownika.' }))
    .catch(err => next(err))
}

module.exports = router