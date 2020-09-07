const express = require('express')
const router = express.Router()
const Game = require('../models/game')
const Results = require('../models/results')

router.get('/', async (req, res) => {
  try {
    const games = await Game.find()
    res.json(games)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.get('/last', async (req, res) => {
  try {
    const query = Results
      .aggregate(
        [
          { $sort: { game: 1, date: 1 } },
          {
            $group:
            {
              _id: "$game",
              lastGameDate: { $last: "$date" },
            }
          }
        ]
      )
    const results = await query
    res.json(results)
  }
  catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.get('/:id', getGame, (req, res) => {
  res.json(res.game)
})

router.post('/', async (req, res) => {
  const game = new Game({
    name: req.body.name,
    minPlayers: req.body.minPlayers,
    maxPlayers: req.body.maxPlayers,
    pointFields: req.body.pointFields
  })
  try {
    const newGame = await game.save()
    res.status(201).json(newGame)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

router.patch('/:id', getGame, async (req, res) => {
  if (req.body.name != null) {
    res.user.name = req.body.name
  }
  if (req.body.minPlayers != null) {
    res.user.minPlayers = req.body.minPlayers
  }
  if (req.body.maxPlayers != null) {
    res.user.maxPlayers = req.body.maxPlayers
  }
  if (req.body.pointFields != null) {
    res.user.pointFields = req.body.pointFields
  }
  try {
    const updatedGame = await res.game.save()
    res.json(updatedGame)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

router.delete('/:id', getGame, async (req, res) => {
  try {
    await res.game.remove()
    res.json({ message: 'Deleted game' })
  } catch (err) {
    res.json(500).json({ message: err.message })
  }
})

async function getGame(req, res, next) {
  let game
  try {
    game = await Game.findById(req.params.id)
    if (game == null) {
      return res.status(404).json('Cannot find game')
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
  res.game = game
  next()
}
module.exports = router