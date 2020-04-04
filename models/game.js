const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  minPlayers: { type: Number, required: true, min: 1, max: 99 },
  maxPlayers: { type: Number, required: true, min: 1, max: 99},
  pointFields: { type: Object, required: true }
})

module.exports = mongoose.model('Game', gameSchema)