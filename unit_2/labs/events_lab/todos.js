document.addEventListener("DOMContentLoaded", () => {
  let todoInput = document.querySelector("#todo-input")
  let list = document.querySelector("ul");

  let form = document.querySelector("form")

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    // Create li item
    let liTodo = document.createElement("li")
    
    // Add user input to the li item
    liTodo.innerText = todoInput.value

    // let p = document.querySelector("#message")
    
    // Good but it could slow the page down if we have
    // 1000 todos. Because each todo will have its
    // own event listener

    // liTodo.addEventListener("click", () => {
    //   liTodo.style.textDecoration = "line-through"
    // })

    if (todoInput.value.trim() !== "") {
      // append item to list
      list.appendChild(liTodo);
      // p.innerText = ""
      todoInput.value = ""
    } else {
      // p.innerText = "Error! Input cannot be empty"
      window.alert("Error!")
    }

    console.log("Form is being submitted")
  })

  list.addEventListener("click", (event) => {
    console.log("the list was clicked")
    console.log(event.target)
    event.target.style.textDecoration = "line-through"
  })
})
