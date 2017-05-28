// app/models/player.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = new Schema ({
  ip: String,
  name: String,
  is_correct: Boolean,
  contributions: [],
  times: [],
  opp_contributions: [],
  probabilities: [],
  mturk_code: String
});

module.exports = mongoose.model('Player', PlayerSchema);
