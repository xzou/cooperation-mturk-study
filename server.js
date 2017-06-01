// server.js

/* ========================================
 * ============= SETUP ====================
 * ======================================== */

var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var path = require('path');
//var ObjectID = mongodb.ObjectID;
var ObjectID = require('mongodb').ObjectID;

var PLAYERS_COLLECTION = 'players';

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

// Create database variable to reuse connection pool in app
var db;

// Connect to database before starting application server
var uri = process.env.MONGODB_URI || process.env.MONGOLAB_URI ||
'mongodb://heroku_506s23zx:1d9enosd9098813rnar282a5bp@ds121171.mlab.com:21171/heroku_506s23zx';
mongodb.MongoClient.connect(uri, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse
  db = database;
  console.log('Database connection ready');

  // Initialize app
  var server = app.listen(port, function () {
    console.log('Listening on port', port);
  });
});


// Set locations of static files
app.use(express.static(path.join(__dirname, '/dist')));

/* ========================================
 * ============= API ROUTES ===============
 * ======================================== */

// Error handler
function handleError(res, reason, message, code) {
  console.log('Error: ' + reason);
  res.status(code || 500).json({'error': message});
}

/* '/api/players'
 * GET: finds all players
 * POST: creates a new player
 */

app.get('/api/players', function(req, res) {
  db.collection(PLAYERS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, 'Failed to get players.');
    } else {
      res.status(200).json(docs);
    }
  });
});

app.post('/api/players', function(req, res) {
  var newPlayer = req.body;
  newPlayer.mturk_code = (function() {
    var code = '';
    var candidates = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i=0; i < 8; i++) 
      code += candidates.charAt(Math.floor(Math.random() * candidates.length));

    return code;
  })();

  db.collection(PLAYERS_COLLECTION).insertOne(newPlayer, function(err, doc) {
    if (err) {
      handleError(res, err.message, 'Failed to create new player.');
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

/* '/api/players/:id'
 *  GET: find player by id
 *  PUT: update player by id
 *  DELETE: delete player by id
 */

app.get('/api/players/:id', function(req,res) {
  db.collection(PLAYERS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
    if (err) {
      handleError(res, err.message, 'Failed to get contact');
    } else {
      res.status(200).json(doc);
    }
  });
});

app.put('/api/players/:id', function(req, res) {
  var updateDoc = req.body;
  delete updateDoc._id;

   db.collection(PLAYERS_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, updateDoc, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to update player");
    } else {
      updateDoc._id = req.params.id;
      res.status(200).json(updateDoc);
    }
  });
});

app.delete('/api/players/:id', function(req, res) {
  db.collection(PLAYERS_COLLECTION).deleteOne({ _id: new ObjectId(req.params.id) }, function(err, result) {
    if (err) {
      handleError(res, err.message, 'Failed to delete player');
    } else {
      res.status(200).json(req.params.id);
    }
  }); 
});


