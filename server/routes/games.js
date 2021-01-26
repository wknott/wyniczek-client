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

router.get('/numberOfResults', async (req, res) => {
  try {
    const numberOfResultsPerGame = await Results.aggregate([
      {
        $group:
        {
          _id: "$game",
          numberOfResults: { $sum: 1 },
        }
      }
    ])
    res.json(numberOfResultsPerGame)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

router.get("/numberOfResults/:id", async (req, res) => {
  try {
    const numberOfResults = await Results.find({ game: req.params.id }).countDocuments();
    res.json(numberOfResults);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

router.get('/:id', getGame, (req, res) => {
  res.json(res.game)
})

router.post('/', async (req, res) => {
  const {
    name,
    minPlayers,
    maxPlayers,
    pointFields,
    bggId,
    imgUrl,
    thumbnailUrl,
  } = req.body;
  const game = new Game({
    name,
    minPlayers,
    maxPlayers,
    pointFields,
    bggId,
    imgUrl,
    thumbnailUrl,
  })
  try {
    const newGame = await game.save()
    res.status(201).json(newGame)
  } catch (err) {
    res.status(200).json({ message: err.message })
  }
})

router.patch('/:id', getGame, async (req, res) => {
  if (req.body.name !== null) {
    res.game.name = req.body.name
  }
  if (req.body.minPlayers !== null) {
    res.game.minPlayers = req.body.minPlayers
  }
  if (req.body.maxPlayers !== null) {
    res.game.maxPlayers = req.body.maxPlayers
  }
  if (req.body.pointFields !== null) {
    res.game.pointFields = req.body.pointFields
  }
  if (req.body.bggId !== null) {
    res.game.bggId = req.body.bggId
  }
  if (req.body.imgUrl !== null) {
    res.game.imgUrl = req.body.imgUrl
  }
  if (req.body.thumbnailUrl !== null) {
    res.game.thumbnailUrl = req.body.thumbnailUrl
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