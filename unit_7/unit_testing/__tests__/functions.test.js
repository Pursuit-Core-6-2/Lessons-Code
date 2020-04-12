const { multiply, squareArray } = require('../functions')

describe("Multiply function", () => {

  test("Multiplies two numbers", () => {
    expect(multiply(10, 2)).toBe(20)
    expect(multiply(5, 5)).toBe(25)
    expect(multiply(6, 6)).toBe(36)
    expect(multiply(7, 7)).toBe(49)
    expect(multiply(0, 7)).toBe(0)
    expect(multiply(1, -7)).toBe(-7)
  })

  test("Returns null when one of the args is not a number", () => {
    expect(multiply("hello", 7)).toBe(null)
    expect(multiply(2, "bye")).toBe(null)
  })

  test("Function never returns undefined", () => {
    expect(multiply("hello", 7)).not.toBeUndefined()
    expect(multiply(2, "bye")).not.toBeUndefined()
    expect(multiply(0, 1)).not.toBeUndefined()
    expect(multiply(2, 1)).not.toBeUndefined()
    expect(multiply()).not.toBeUndefined()
  })

})

describe("Square an array", () => {
  test("Rejects non-arrays, returns null", () => {
    expect(squareArray(5)).toBe(null)
    expect(squareArray("Hello")).toBeNull()
    expect(squareArray({ key: "value" })).toBeNull()
    expect(squareArray(true)).toBeNull()
  })

  test("Returns an array", () => {
    expect(squareArray([1])).toBeInstanceOf(Array)
    expect(squareArray([])).toBeInstanceOf(Array)

    expect(Array.isArray(squareArray([2, 1]))).toBe(true)
    expect(squareArray([2, 1]) instanceof Array).toBeTruthy()
  })

  test("Returns an array that's the same length as the one passed in", () => {
    let input1 = [2, 2]
    let input2 = []
    let input3 = new Array(1000)
    expect(squareArray(input1).length).toBe(input1.length)
    expect(squareArray(input2).length).toBe(0)
    expect(squareArray(input3).length).toBe(1000)
  })

  test("Returns an array where each element is squared", () => {
    expect(squareArray([1, 2])).toEqual([1, 4])
    expect(squareArray([2, 4, 6])).toEqual([4, 16, 36])
    expect(squareArray([])).toEqual([])
  })
})

// Matchers
// toBe
// toBeNull
// toBeTruthy
