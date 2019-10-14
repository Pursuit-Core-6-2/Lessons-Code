# CSS Selectors

* Simple Selectors
  - type (tag name)
    * h2 sample

  - class
    * What if you won't want to style all the headings?
    * Any number of HTML elements can belong to the same class and one element can belong to multiple classes 
    * [DEMO] `<div class="class-one class-two">` I have two classes! </div>
    * Syntax: spacing, multiwords with dashes

  - id
    * Must be unique
    * No multiple ID
    * Analogy id vs class. You vs Queens residents
    * If styled by id overrides the style by class due
      to specificity
    * Read pros and cons of using IDs
  
* Combinators + groups
  - Motivation: More detailed & targeted control.

  - Group selectors (comma)
    * When you want to style multiple elements
    * Demo

  - Descendant Selector (space)
    * [DEMO] with `ul ol li`
    * What happens if we remove ol
    * [DRAW] Tree

  - Child selector (right angle bracket)
    * Similar to descendant
    * Only direct children
    * Family tree analogy

  - Sibling selector (plus) (selectorA + selectorB)
    * It will match selectorB only if selectorA
      is a sibling of selector B
    * [Sample] paragraphs that come immediatley after img
      `img + p {}`

## Advanced Selectors
  * Motivation: Flexibility

  * Pseudo-Classes (colon) (:)
    - Style elements on specific state
    - [DEMO] visited link & hover over button
    - Effect we saw yesterday on css tricks

  * Pseudo-Element (double colon) (::)
    - Parts of the element. Like the first line

  * Attribute Selectors (square bracket) ([attr])
    - Select elements that have certain attribute

  * Exact Attribute Selector (square bracket) ([attr=match])
    - Starts with `^=`
    - Ends with `$=`
    - Contains `*=`

  * Universal selector *

