# CSS Display, Position, and Z-Index

Back to our familiar `index.html` file. Let's make a few adjustments to make this page as **nice as possible**:

- Make a CSS file and import it into your HTML. Feel free to adjust your **HTML or CSS** as needed.
- Frequently, we'd like to make our footer visible so that we don't have to scroll to the bottom to see the information. We can do this by using `fixed`.
  - Starting from `Contact Me` and continuing for the rest of the content on the page, make it so that that information is visible no matter where the user is looking. Additionally, using either Flexbox, grid, or `position: relative`, make the information display in a row, rather than a column.
  - Add some [Lorem Ipsum](https://www.lipsum.com/) in `p` tags to extend the length of the page so that you can make sure it works.
- Let's make our skills list render next to our image. Using `position: relative`, `display: flex`, or grid, reposition your skills to start at the same vertical position as the first image. However, on the horizontal axis, they should be to the right with 20 pixels between them.
- Let's shed some light on the situation. Place this [image](http://www.sunnysidedrama.com/index/Welcome_files/Playtime_Sun-4.png) in the upper-right hand corner of the screen. Give it `position: absolute` so it stays there, and make sure it has a `z-index` so that nothing ever covers it.

Now, because we're evil, let's make some parts of the page as **unusable as possible** (muahaha). Make a copy of your `index.html` file called `evilIndex.html`, and make a corresponding copy of your CSS:

- `:hover` is something that you can add to your CSS selectors to change their styling when the mouse is hovering over an element. We'd like to mess with our users and make elements disappear when they mouse over the element. Add `display: none` to your `img` elements' `hover` selectors so that the images disappear when the user mouses over them.
  - Bonus: Add `hover` selectors to your different text elements that change their `background-color`.
- You know what would maximize use of space? If our elements were _unbelievably thin_ and placed next to each other. Make the `width` of each element 20px. Then add `display: flex; justify-content: space-around` to your `body` selector. **Much better.**
- Some of our elements are stepping on each others' toes. Add `position: relative` to each element and give them `top`, `bottom`, `left`, and `right` properties until they're properly spaced apart.

**Bonus**: See how deviously unusable you can make your site. The ugliest site that people can _describe their CSS_ for wins!
