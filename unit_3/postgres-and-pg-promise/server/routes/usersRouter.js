const express = require('express');
const router = express.Router();

// pg-promise setup
const pgp = require('pg-promise')(); // Import pg-promise
const connectionString = "postgres://localhost:5432/facebook_db" // URL where Postgres is running
const db = pgp(connectionString) // Connected db instance


router.get('/', (req, res) => {
  db.any("SELECT * FROM users WHERE id = 100")
    .then(rows => {
      console.log(rows)
      res.json(rows)
    })
    .catch(error => {
      console.log(error)
    })

})

module.exports = router;
