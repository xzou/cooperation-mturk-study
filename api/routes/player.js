
/* ========================================
 * ============= API ROUTES ===============
 * ======================================== */

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Player = require('../models/Player');

// Router middleware
router.use(function(req, res, next) {
  console.log('Things are happening');
  next();
});

// Get home page
router.get('/', function(req, res, next) {
  res.send('API working');
});

// GET
router.get('/players', function(req, res, next) {
  Player.find(function(err, players) {
    if (err) 
      return next(err);
    res.json(players);
  });
});

// POST
router.post('/players', function(req, res, next) {
  Player.create(req.body, function(err, player) {
    if (error)
      return next(err);
    res.json(player);
  });
    /*var player = new Player();

    player.ip = req.body.ip;
    player.name = req.body.name;
    player.age = req.body.age;
    player.gender = req.body.gender;
    player.mturk_code = (function() {
      var code = '';
      var candidates = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

      for (var i=0; i < 8; i++) 
        code += candidates.charAt(Math.floor(Math.random() * candidates.length));

      return code;
    })();

    // Save player 
    player.save(function(err) {
      if (err) 
        return res.send(err);
      res.json(player);
    }); */
  });

// GET
router.get('/players/:player_id', function(req, res, next) {
  Player.findById(req.params.player_id, function(err, player) {
    if (err)
      return next(err);
    res.json(player);
  });
/*    Player.findById(req.params.player_id, function(err, player) {
      if (err)
        res.send(err);
      res.json(player);
    }); */
});

// PUT
router.put('/players/:player_id', function(req, res, next) {
  Player.findByIdAndUpdate(req.params.player_id, req.body, function (err, player) {
    if (err)
      return next(err);
    res.json(player);
});
   /* Player.findById(req.params.player_id, function(err, player) {
      if (err) 
        res.send(err);
   
      player.name = req.body.name;
      player.is_correct = req.body.is_correct;
      player.contributions = req.body.contributions;
      player.opp_contributions = req.body.opp_contributions;
      player.probabilities = req.body.probabilities;
      player.contrib_times = req.body.contrib_times;
      player.probabilities_times = req.body.probabilities_times;
      player.player_score = req.body.player_score;
      player.opp_score = req.body.opp_score; 

      // Save player
      player.save(function(err) {
        if (err)
          return res.send(err);
        res.json({ message: 'Player updated' });
      });
    }); */
});

// DELETE
router.delete('/players/:player_id', function(req, res, next) {
  Player.findByIdAndRemove(req.params.player_id, req.body, function (err, player) {
    if (err)
      return next(err);
    res.json(player);
  });

    /*Player.remove({
      _id: req.params.player_id
    }, function(err, player) {
      if (err)
        res.send(err);
      res.json({message: 'Player deleted' });
    }); */
});

module.exports = router;

