const mongoose = require('mongoose');
let User = require('./user');
let Game = require('./game');
const Schema = mongoose.Schema;
const resultSchema = new Schema({
    game: { 
        type: Schema.Types.ObjectId, 
        required: true, 
        ref: 'Game'
    },
    scores: { 
        type: [{
        user:{ type:Schema.Types.ObjectId, ref: 'User'},
        points:{ type: [{ type: String }]}
        }],
        required: true
    },
    author: {
      type: Schema.Types.ObjectId, 
      required: true,
      ref: 'User'
    },
    firstPlayer: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    date: { type: Date }
});
const Result = mongoose.model('Result', resultSchema);
module.exports = Result;