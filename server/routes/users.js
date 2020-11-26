const express = require('express')
const router = express.Router()
const userService = require('../services/users');
const Results = require('../models/results')
const User = require('../models/user')

const getWinners = (result) => {
  const sumOfPoints = (points) => Object.values(points).reduce((x, y) => x + y, 0);
  const maxSumOfPoints = Math.max(
    ...result.scores.map((score) =>
      sumOfPoints(score.points)
    )
  );

  const winners = result.scores
    .filter(
      (score) =>
        sumOfPoints(score.points) === maxSumOfPoints &&
        sumOfPoints(score.points) > 0
    )
    .map((score) => score.user);
  return winners;
}

const groupArray = (array) => {
  return array.reduce((prev, item) => {
    if (item in prev) prev[item]++;
    else prev[item] = 1;
    return prev;
  }, {});
}

router.get('/numberOfResults', async (req, res) => {
  try {
    const gameId = req.query.gameId
    const users = await User.find();
    const results = await Results.find(gameId === undefined ? {} : { game: gameId });
    const winners = await results.map(result => getWinners(result)).flat();
    const players = await results.map(result => result.scores.map(score => score.user)).flat();
    const wins = await groupArray(winners);
    const plays = await groupArray(players);
    const usersWithDetails = await users.map(({ name, _id }) => {
      const numberOfResults = plays[_id] || 0;
      const numberOfWins = wins[_id] || 0;
      return (
        { name, _id, numberOfResults, numberOfWins }
      )
    });
    res.json(usersWithDetails);
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
    .then(user => user ? res.json(user) : res.status(200).json({ message: 'Nazwa użytkownika albo hasło jest niepoprawne.' }))
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