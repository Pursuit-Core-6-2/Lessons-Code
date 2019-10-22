/*
  products.js : This file will serve as the router for our Product features
*/

const express = require('express');
// Initializing our Router Class
const router = express.Router();

// Instead of setting our request methods on app, we are setting it on our router
router.get('/', (req, res) => {
  res.send('Sending list of all products!')
});

router.get("/one", (req, res) => {
  res.send('This is sub-route one at: ' + req.originalUrl)
})

// Notice how we aren't writing /product/:product_id
// This is because we are nesting and in app.js we will already have the first part
router.get('/:product_id', (req, res) => {
  res.send('Sending specific product!')
});


// Export the router like any other NodeJS module
module.exports = router;
