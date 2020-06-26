const express = require('express')
const router = express.Router()
const Results = require('../models/results')

router.get('/', async (req, res) => {
  try {
    const gameId = req.query.gameId
    const onlyLast = req.query.last
    const userIds = req.query.users
    
    let query

    if (gameId === undefined){
      query = Results.find()
      if (userIds !== undefined)
        query.elemMatch("scores", {"user": { $in: userIds } })
    }
    else {
      if (onlyLast === 'true')
        query = Results.findOne({game: gameId}).sort({ date: -1 })
      else
        query = Results.find({game: gameId})
    }
    
    const results = await query.populate('game').populate({path: 'scores.user'})
    res.json(results)
  } catch (err) {
    res.status(500).json({message: err.message})
  } 
})

router.get('/:id', async (req, res) => {
  try {
    const results = await Results.findById(req.params.id).populate('game').populate({path: 'scores.user'})
    res.json(results)
  } catch (err) {
    res.status(500).json({message: err.message})
  } 
})

router.post('/', async (req,res) => {
  const results = new Results({
    game: req.body.game,
    scores: req.body.scores,
    author: req.body.author,
    date: new Date()
  })
  try {
    const newResults = await results.save()
    res.status(201).json(newResults)
  } catch (err) {
    res.status(400).json({message: err.message})
  }
})

router.patch('/:id', getResults, async (req, res) => {
  if (req.body.game != null) {
    res.results.game = req.body.game
  }
  if (req.body.scores != null) {
    res.results.scores = req.body.scores
  }
  if (req.body.author != null) {
    res.results.author = req.body.author
  }
  if (req.body.date != null) {
    res.results.date = req.body.date
  }
  try {
    const updatedResults = await res.results.save()
    res.json(updatedResults)
  } catch (err) {
    res.status(400).json({message: err.message})
  }
})

router.delete('/:id', getResults, async (req, res) => {
  try {
    await res.results.remove()
    res.json({message: 'Deleted results'})
  } catch (err) {
    res.json(500).json({message: err.message})
  }
})

async function getResults(req, res, next) {
  let results
  try {
    results = await Results.findById(req.params.id)
    if (results == null) {
       return res.status(404).json('Cannot find results')
    }
  } catch (err) {
    return res.status(500).json({message: err.message})
  }
  res.results = results
  next()
}

module.exports = router