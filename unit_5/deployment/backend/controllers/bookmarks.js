const express = require("express");
const router = express.Router();

// import the bookmark queries
const db = require("../db/queries");

// get all bookmarks
router.get("/", (req, res) => {
  db.getAllBookmarks()
    .then(results => {
      res.json(results)
    })
    .catch(err => {
      console.log(err)
    })
});

// get bookmark by title
router.get("/:title", (req, res) => {
  db.getBookmarkByTitle(req.params.title).then(results => {
    console.log(results)
    res.json(results)
  })
});

// add new bookmark associated with a user id
router.post("/:userId", (req, res) => {
  const bookmarkObj = {
    user_id: req.params.userId,
    url: req.body.url,
    title: req.body.title
  }

  db.createBookmark(bookmarkObj).then(results => {
    res.sendStatus(200)
  })

});

// update a bookmark by id
router.put("/:id", (req, res) => {
  // use ID param to look up bookmark
  // update with the new values passed in from request body
  let params = {
    id: req.params.id,
    ...req.body
  }

  db.updateBookmark(params).then(() => {
    res.sendStatus(200);
  })

});

// delete a bookmark by id
router.delete("/:id", (req, res) => {
  // use title as a param to find the record we want to remove
  db.deleteBookmark(req.params.id).then(() => {
    res.sendStatus(200);
  })
});

module.exports = router;
