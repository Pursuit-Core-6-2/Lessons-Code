const express = require('express')
const bodyParser = require('body-parser');

const port = 3000;
const app = express();

// app.use(bodyParser.urlencoded({
//   extended: false
// }))

const handleCors = (req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*")
  next()
}

app.use(handleCors)

app.use((req, res, next) => {
  let currDate = new Date()
  console.log(req.method, req.url, req.body, currDate.toLocaleString())
  next();
})

const middlewareA = (req, res, next) => {
  // console.log("This is middlewareA")
  res.send("This is middlewareA")
  // next()
}

const sendHelloWorld = (req, res, next) => {
  // console.log('Hello world');
  res.send('Hello World');
}

app.get('/', middlewareA, sendHelloWorld);

const validateInput = (req, res, next) => {
  let newUser = req.body
  if (!newUser.username || !newUser.email || !newUser.password) {
    res.json({
      error: "Missing username, email or password"
    })
  } else {
    next();
  }
  console.log('req.body')
}

const welcomeNewUser = (req, res, next) => {
  let newUser = req.body
  res.json({
    message: `Welcome ${newUser.username}. Registration Successful`
  })
  // res.send('hello')
}

// Implement the route middleware function `availableUsername` that checks
// if a user attempting to signup picks a username
// that has already been taken by another user.
// If the username is taken respond with an appropriate
// error message, otherwise welcome the new user.
// Add the middleware to your `/signup` route

const registeredUsernames = ["alejo4373", "jenama", "orta"]

const availableUsername = (req, res, next) => {
  // console.log('before', registeredUsernames)
  let newUser = req.body;
  for (let username of registeredUsernames) {
    if (newUser.username === username) {
      res.json({
        error: "Username taken. Try another one"
      })
      return;
    }
  }
  registeredUsernames.push(newUser.username)
  // console.log('after', registeredUsernames)
  next();
}

app.post('/signup', (req, res, next) => {
  let data = ''
  req.on('data', chunk => {
    console.log(chunk.toString())
    data += chunk
  });
  req.on('end', () => {
    console.log(data);
  })
  res.send(data);
})//validateInput, availableUsername, welcomeNewUser)

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
