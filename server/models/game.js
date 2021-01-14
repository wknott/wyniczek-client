const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  minPlayers: { type: Number, required: true, min: 1 },
  maxPlayers: { type: Number, required: true, min: 1 },
  pointFields: { type: [{ type: String }], required: true },
  bggId: { type: Number },
  imgUrl: { type: String },
  thumbnailUrl: { type: String },
})

module.exports = mongoose.model('Game', gameSchema)