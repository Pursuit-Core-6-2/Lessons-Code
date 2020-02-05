const express = require('express');
const router = express.Router();
const userQueries = require('../db/queries/users')
const { loginRequired } = require('../auth/helpers')
// all routes starting with /users
router.get('/', loginRequired, async (req, res, next) => {
  try {
    let users = await userQueries.getAllUsers()
    res.json({
      payload: users,
      msg: "Retrieved all users",
      err: false
    })
  } catch (err) {
    res.status(500).json({
      payload: null,
      msg: "Failed retrieving all users",
      err: true
    })
  }
});


module.exports = router;
