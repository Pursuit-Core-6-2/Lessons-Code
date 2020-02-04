const express = require("express");
const router = express.Router();

const db = require('../db/queries')

// get all users
router.get("/", (req, res) => {
  db.getAllUsers().then(results =>
    res.json(results)
  )
});

// get one user by id
router.get("/:id", (req, res) => {
  db.getOneUser(req.params.id).then(results => {
    res.json(results)
  })
});

// create new user
router.post("/", (req, res) => {
  db.createUser(req.body).then(() => {
    res.sendStatus(200)
  })
});

// update a users info by id
router.put("/:id", (req, res) => {

  let params = {
    id: req.params.id,
    ...req.body
  }

  db.updateUser(params).then(() => {
    res.sendStatus(200)
  })
});


// delete a user by id
router.delete("/:id", (req, res) => {
  db.deleteUser(req.params.id).then(() => {
    res.sendStatus(200)
  })
});

module.exports = router;
