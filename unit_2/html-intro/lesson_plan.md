# Intro to HTML

* Definition & Motivation 
  - Hypertext Markup Language. 
    * `Hyper` generally means 'above, beyond'.
    * `Markup` for that text to become `Hyper` we mark it up with tags.
    * `Language` a set words and methods of combining them 
    * Provide structure to content on a website. Define where content is put and hierarchy. This markup tells a web browser how to display the text, images and other forms of multimedia on a webpage.
    * Content can be:
      - Text
      - Images
      - Titles
      - Tables

* Overall anatomy of an HTML file
  -`<html>` tag. Indicates to the browser it should interpret html file
  -`<head>` tag. To add metadata to web site like change it's title, link css and javascript
  -`<body>` tag. Were everything else goes.
  - Opening and closing tags. Content inside.

* Other tags
  - `<div>` tag. Defines a division or section. Ofter used as container for other elements
  - `<h1>` Header tags
  - `<p>` paragraph tags
  - `<ul> & <ol>` list tags.
    * `<li>` list item tag.
  - `<button>` tag. onclick

* Writing JS in the browser
  - `<script>` tag. 
  - `console.log()`
  - `window.alert()`

* DOM (Document Object Model)
  - What the motivation of objects again in JS? To model the real world.
  - Tree/Hierarchy structure
  - `document` object 
  - `document.children` -> `body.children`
  - `document.getElementById()`

* Modifying the DOM with JavaScript
  - `document.createElement()`
  - `document.appendChild()`
  - `document.removeChild()`