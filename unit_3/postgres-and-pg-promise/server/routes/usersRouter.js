const express = require('express');
const router = express.Router();

// pg-promise setup
const pgp = require('pg-promise')(); // Import pg-promise
const connectionString = "postgres://localhost:5432/facebook_db" // URL where Postgres is running
const db = pgp(connectionString) // Connected db instance


router.get('/', async (req, res) => {

  // ES5 method of dealing with promises
  // db.any("SELECT * FROM users WHERE id = 100")
  //   .then(rows => {
  //     console.log(rows)
  //     res.json(rows)
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })

  // ES6 method async-await with try-catch
  try {
    let users = await db.any("SELECT * FROM users")

    res.json({
      payload: users,
      message: "Success. Retrieved all the users"
    });

  } catch (error) {
    res.status(500)
    res.json({
      message: "Error. Something went wrong!"
    })
    console.log(error)
  }
})

router.post('/register', async (req, res) => {
  // firstname, lastname, age
  console.log(req.body)

  try {
    let insertQuery = `
    INSERT INTO users(firstname, lastname, age)
      VALUES($1, $2, $3)
    `

    await db.none(insertQuery, [req.body.firstname, req.body.lastname, req.body.age])

    res.json({
      payload: req.body,
      message: 'User registered!'
    })
  } catch (error) {
    res.json({
      message: "There was an error registering the user."
    })
  }
})

router.post('/kill', async (req, res) => {
  // firstname, lastname, age
  console.log(req.body)

  try {
    let insertQuery = `
    INSERT INTO users(firstname, lastname, age)
      VALUES($1, $2, $3)
    `

    await db.none(insertQuery, [req.body.firstname, req.body.lastname, req.body.age])

    res.json({
      payload: req.body,
      message: 'User registered!'
    })
  } catch (error) {
    res.json({
      message: "There was an error registering the user."
    })
    console.log(error)
  }
})
module.exports = router;
