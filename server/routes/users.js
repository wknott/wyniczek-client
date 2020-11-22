const express = require('express')
const router = express.Router()
const userService = require('../services/users');
const Results = require('../models/results')
const User = require('../models/user')

const countNumberOfResults = async (userId) => {
  const numberOfResults = await Results.find(
    {
      "scores.user": userId,
    }
  ).countDocuments()
  return numberOfResults;
}

router.get('/numberOfResults', async (req, res) => {
  try {
    const users = await User.find();
    const usersWithNumberOfResults = await Promise.all(users.map(async ({ name, _id }) => {
      const numberOfResults = await countNumberOfResults(_id);
      return (
        { name, _id, numberOfResults }
      )
    }));
    res.json(usersWithNumberOfResults)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

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