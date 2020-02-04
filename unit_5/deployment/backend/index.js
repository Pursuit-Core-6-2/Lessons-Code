require('dotenv').config()
const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const bookmarksController = require("./controllers/bookmarks");
const usersController = require("./controllers/users");

// instantiate express
const app = express();
const PORT = process.env.PORT || 8080

// Middleware configuration

// interprets key value pairs in URLs
app.use(parser.urlencoded({ extended: true }));

// converts a json string to the an object and attaches it to req.body
app.use(parser.json());

// cors allows connections from all domains
app.use(cors());

// redirect any requests to the homepage to bookmarks
app.get("/", (req, res) => {
  res.json({
    msg: "Welcome to the book-e API. The endpoints available are /api/users and /api/bookmarks"
  })
});

// hands off requests on the '/api/bookmarks' route to the bookmarks controller
app.use("/api/bookmarks/", bookmarksController);
// hands off requests on the '/api/users' route to the users controller
app.use("/api/users/", usersController);

app.listen(PORT, () => console.log("They see me rollin...on port " + PORT));
