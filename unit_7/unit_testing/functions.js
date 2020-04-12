const multiply = (a, b) => {
  // is no a number
  if (typeof a !== "number" ||
    typeof b !== "number"
  ) {
    return null;
  }
  return a * b;
}

// [1, 2, 3]
// => [1, 4, 9]
const squareArray = (arr) => {
  if (!Array.isArray(arr)) {
    return null
  }
  return arr.map(v => v * v)
}

module.exports = {
  multiply,
  squareArray
}
