/*
  orders.js : This file will serve as the router for our Order features
*/

const express = require('express');
const router = express.Router();

router.get('/orders/:user_id', (req, res) => {
  res.send('Sending specific users orders!')
});

module.exports = router;
