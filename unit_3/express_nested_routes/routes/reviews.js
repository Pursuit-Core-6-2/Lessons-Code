/*
  reviews.js : This file will serve as the router for our Review features
*/

const express = require('express');
const router = express.Router();

router.get('/:product_id', (req, res) => {
  res.send('Sending specific reviews of a product!')
});

router.post('/:product_id', (req, res) => {
  res.send('Creating new review on a product!')
});

module.exports = router;
