// server.js

/* ========================================
 * ============= SETUP ====================
 * ======================================== */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var uri = process.env.MONGODB_URI || process.env.MONGOLAB_URI; 

var Player = require('./app/models/player');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(uri, function(err, res) {
  if (err) {
    console.log('Error connecting to: ' + uri + '.' + err);
  } else {
    console.log('Connected to: ' + uri);
  }
});

var port = process.env.PORT || 8080;

/* ========================================
 * ============= API ROUTES ===============
 * ======================================== */

var router = express.Router();

router.use(function(req, res, next) {
  console.log('Things are happening');
  next();
});

// Test route
router.get('/', function(req, res) {
  res.json({ message: 'Things are working' });
});

router.route('/players')
  // GET
  .get(function(req, res) {
    Player.find(function(err, players) {
      if (err) 
        res.send(err);
      res.json(players);
    });
  })
  // POST
  .post(function(req, res) {
    var player = new Player();

    player.IP = req.body.IP;
    player.is_correct = req.body.is_correct;

    // Save player 
    player.save(function(err) {
      if (err) 
        res.send(err);
      res.json(player);
    });
  });

router.route('/players/:player_id')
  // GET
  .get(function(req, res) {
    Player.findById(req.params.player_id, function(err, player) {
      if (err)
        res.send(err);
      res.json(player);
    });
  })
  // PUT
  .put(function(req, res) {
    Player.findById(req.params.player_id, function(err, player) {
      if (err) 
        res.send(err);

      player.contributions = req.body.contributions;
      player.opp_contributions = req.body.opp_contributions;
      player.probabilities = req.body.probabilities;
      player.mturk_code = req.body.mturk_code;

      // Save player
      player.save(function(err) {
        if (err)
          res.send(err);
        res.json(player);
      });
    });
  })
  // DELETE
  .delete(function(req, res) {
    Player.remove({
      _id: req.params.player_id
    }, function(err, player) {
      if (err)
        res.send(err);
      res.json({message: 'Player deleted' });
    });
  });
   

// Register routes
app.use('/api', router);

/* ========================================
 * ============ START SERVER ==============
 * ======================================== */

app.listen(port);
console.log('Things are working on port ' + port);




