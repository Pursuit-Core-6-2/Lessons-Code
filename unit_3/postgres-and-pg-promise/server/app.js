const express = require('express')
const cors = require('cors')

const app = express();
const PORT = 3000;

app.use(cors())

app.use(express.urlencoded({
  extended: false
}))

app.use(express.json())

// Routers
const usersRouter = require('./routes/usersRouter');

app.use('/users', usersRouter)

app.use('/', (req, res) => {
  res.send('Welcome to Facebook')
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
