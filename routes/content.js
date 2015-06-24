
var path = require('path');
var fs = require('fs');
var express = require('express');

var router = express.Router();


// Play a sound command
router.get('/play-sound', function(req, res) {
  res.render('play-sound');
});

// Collision Event
router.get('/collision-event', function(req, res) {
  res.render('collision-event');
});

// Collision Event with specific collisions
router.get('/collision-events', function(req, res) {
  res.render('collision-events');
});

// Game started
router.get('/game-started', function(req, res) {
  res.render('game-started');
});

// Step taken handle scoring
router.get('/step-taken', function(req, res) {
  res.render('step-taken');
});

// Keyboard handler
router.get('/diy', function(req, res) {
  res.render('diy');
});

// Keyboard handler
router.get('/kb', function(req, res) {
  res.render('kb');
});

module.exports = router;
