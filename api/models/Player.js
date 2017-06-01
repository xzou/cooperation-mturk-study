// app/models/Player.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = new Schema ({
  ip: String,
  name: String,
  age: Number,
  gender: String,
  mturk_code: String,
  is_correct: Boolean,
  contributions: [],
  opp_contributions: [],
  probabilities: [],
  contrib_times: [],
  probabilities_times: [],
  player_score: Number,
  opp_score: Number
});

module.exports = mongoose.model('Player', PlayerSchema);
