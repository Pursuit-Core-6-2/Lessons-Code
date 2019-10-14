const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
  extended: false
}))

// app.use((req, res, next) => {
//   res.set('Access-Control-Allow-Origin', '*')
//   next();
// })

app.post('/login', (req, res) => {
  console.log('req.body', req.body);
  res.send('Welcome ' + req.body.email);
})

app.get('/dog/:breed/:age', (req, res) => {
  console.log('req.params', req.params);
  res.send('/dog route hit params:' + JSON.stringify(req.params))
})

const makeBikesArray = () => {
  const bikes = [];

  for (let i = 0; i <= 100; i++) {
    const bike = {
      color: "",
      id: i,
      brand: "6.2Bikes"
    }

    if (i % 2) {
      bike.color = 'red'
    } else {
      bike.color = 'blue'
    }

    bikes.push(bike)
  }
  return bikes;
}

const inventory = makeBikesArray();

app.get('/bikes', (req, res) => {
  let limit = Number(req.query.limit);
  console.log('limit', limit)

  if (isNaN(limit)) {
    limit = inventory.length
  }

  let bikes = inventory.slice(0, limit)
  console.log('req.query', req.query)
  res.json(bikes)
})



app.listen(3000, () => {
  console.log('Running at http://localhost:3000/')
})

