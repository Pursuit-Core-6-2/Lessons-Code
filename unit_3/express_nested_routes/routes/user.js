/*
  users.js : This file will serve as the router for our User features
*/

const express = require('express');
const router = express.Router();

router.get('/all', (req, res) => {
  res.send('Sending all users!')
});

router.get('/:user_id', (req, res) => {
  res.send('Sending specific user!')
});

router.post('/register', (req, res) => {
  res.send('Creating new user!')
});

module.exports = router;
