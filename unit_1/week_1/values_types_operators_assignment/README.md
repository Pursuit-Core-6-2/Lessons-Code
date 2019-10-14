# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17` //number literal, evaluates the number 17
* `1 + 2 * 3 + 4` // Arithmetic expression, 11, because the order of ops. 1st * then +
* `800 / 80 / 8` // Arithmetic exp., 1.25, 800/80 = 10 => 10/8 => 1.25
* `400 > 200` Boolean exp. true, 400 is indeed greater than 200
* `1 !== 1` // Boolean exp. false. because 1 is 1. 1 is not different than 1
* `true || false` // Boolean. true, because or checks if one of the 2 statements(sides) is true and if so it returns true
* `true && false`
* `20 % 6`
* `'a' + 'b'`
* `false && true` // Boolean expression, evaluates to false, because && (AND) requires both sides to be true to yield true

2. What will the following return?
* `typeof 4` // number
*  `typeof 'hello'` // string, because the operand is in single quotes.
*  `typeof true` // boolean
* `2 === 1 || 3 === 4` // False, it checks at least if one side is true.

3. Create a truth table for the expression A || B.

```
|   A   |   B   | A || B |
| true  | true  |  true |
| false | true  |  true |
| true  | false |  true   |
| false | false |  false |

```

For reference, here is a truth table for the expression A && B:

``` js

|   A   |   B   | A && B |
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false |

```
4. Create a truth table for the expression !A && !B.
```
|   A   |   B   |  !A    |  !B    | !A && !B |
| true  |  true |  false |  false |  false   |
| false | true  |  true  |  false |  false   |
| true  | false |  false |  true  |  false   |
| false | false |  true  |  true  |  true    |
```


For reference, here is a truth table for the expression A && !B:

``` js

|   A   |   B   |   !B   | A && B |
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false |

```
5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
  For reference, here is a exp of a step-by-step evaluation:
  ```js
  1 + 2 + 3 + 4
      3 + 3 + 4
          6 + 4
              10
  ```
  ```
  2 + 3 * 2 + 1
      2 + 6 + 1
          8 + 1
              9
  ```

 6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.

 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.
 ```

  'ca' + 'ter' + 'pi' + 'llar' // Concatenating strings
  'cater' + 'pi' + 'llar'
  'caterpi' + 'llar'
  'caterpillar'
 ```
 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.

 ```
2 * 4 === 8 && 'car' + 'pool' === 'carpool'
8 === 8 && 'carpool' === 'carpool'
true && true
true.
 ```
