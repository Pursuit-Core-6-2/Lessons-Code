const express = require('express')
const app = express();

// 1. Independent routes for different operations
app.get('/add/:num1/:num2', (req, res) => {
  console.log(req.params)
  // let num1 = parseFloat(req.params.num1);
  // let num2 = parseFloat(req.params.num2);

  let num1 = Number(req.params.num1);
  let num2 = Number(req.params.num2);

  if (isNaN(num1) || isNaN(num2)) {
    res.send("Only numbers please!")
    return;
  }

  const result = {
    num1: num1,
    num2: num2,
    result: num1 + num2
  }
  res.json(result)
  console.log(res.getHeaders())
  console.log('===========\n')
})

app.get('/div/:num1/:num2', (req, res) => {
  console.log(req.params)
  // let num1 = parseFloat(req.params.num1);
  // let num2 = parseFloat(req.params.num2);

  let num1 = Number(req.params.num1);
  let num2 = Number(req.params.num2);

  if (isNaN(num1) || isNaN(num2)) {
    res.send("Only numbers please!")
    return;
  }

  let quotient = num1 / num2

  const result = {
    num1: num1,
    num2: num2,
    result: quotient
  }
  console.log(result)
  res.json(result)
})

// 2. All operation in one endpoint/route
app.get('/:num1/:operator/:num2', (req, res) => {
  let num1 = Number(req.params.num1);
  let num2 = Number(req.params.num2);
  let operator = req.params.operator;

  if (isNaN(num1) || isNaN(num2)) {
    res.send('Numbers only please!')
    return;
  }

  const operations = {
    "/": (a, b) => { return a / b },
    "*": (a, b) => a * b,
    "+": (a, b) => { return a + b },
    "-": (a, b) => { return a - b }
  }

  if (operations[operator]) {
    let result = operations[operator](num1, num2)
    let data = {
      num1: num1,
      num2: num2,
      result: result
    }
    res.json(data)
  } else {
    res.send('Invalid operator!')
  }
})

app.listen(3000, () => {
  console.log('server listening on http://localhost:3000')
})
