# CSS Display, Position, and Z-Index

## Intro
* In HTML we have a variety of properties we can apply to our html elements that will allow us to customize the element's appearance and position on the screen. We will look at the `display` property, of which we already saw some values like `grid` and `flex`. As well as the `position` and `z-index` properties

## Display
* `block` (default)
  - spans with display: block;
  - Line breaks before and after. 100% of available width 
  - Normal flow vs Flex or Grid flow;
* `inline`
  - inline elements vs block elements
* `none`
  - Removed from the dom?? Actually no just hidden;
* Many others, we saw `grid` and `flex` but there's more;

## Position

* Motivation
  - Flexibility when placing an element in the page

* Position prop enables `top`, `bottom`, `right` and `left` properties

* `static`: Default. Let's look at the default value for position.

* `relative`:
  - The element is positioned relative to the position where the element would go in the normal flow.
  - Space where the element will go is left intact.
  - Look at lesson for another way or wording this.

* `absolute`:
  - The element is positioned relative to its first positioned (non static) ancestor element.
  - No space left. Element removed of the normal flow
  - __Example__: 
    * `inner-container` position absolute. 
    * `outer` position relative;

* `relative` vs `absolute` Demo.

* `fixed`: 
  - Element is positioned relative to the browser window
  - Example navbar in w3schools or gothamist.com

## Z-index
  - __EXERCISE__: to the `span` class give a `position: fixed;` and set top and left equal to 0.
    * What happened?
    * What if we want the 1st element to be at the top or front?

  - z-index integer value and default
  - Webpage or container element as a 3D space.

  
## Challenging questions
- What if the value for `right` is greater than `left`
- `relative` vs `absolute`
- Negative values for `trbl`?
