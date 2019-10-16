const express = require('express')
const app = express();

const validNumbers = (req, res, next) => {
  let ceil = parseInt(req.query.ceil);
  let floor = parseInt(req.query.floor);
  if (isNaN(ceil) || isNaN(floor)) {
    res.json({
      "status": "Error ceil or floor is no a valid number"
    })
  } else if (floor > ceil) {
    res.json({
      "status": "Error floor is greater than ceil."
    })
  } else {
    req.myNumbers = {
      ceil: ceil,
      floor: floor
    }
    next();
  }
}

const pickRandomNum = (req, res, next) => {
  const ceil = req.myNumbers.ceil;
  const floor = req.myNumbers.floor;

  let arr = [];

  for (let i = floor; i <= ceil; i++) {
    arr.push(i)
  }

  // Use Math.random and Math.floor to calculate a random index
  let randomIndex = Math.floor(Math.random() * arr.length)

  console.log(arr)
  res.json({
    status: "success",
    range: [floor, ceil],
    randPick: arr[randomIndex]
  })
}

app.get("/random", validNumbers, pickRandomNum)

app.listen(3000, () => {
  console.log('Server runnning on http://localhost:3000')
})
