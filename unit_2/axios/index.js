let url = "http://sw62-todos-api.herokuapp.com/api/todos"

document.addEventListener('DOMContentLoaded', () => {
  getTodos();
  setupFormListener();
})

const setupFormListener = () => {
  let form = document.querySelector('form')

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let todoInput = document.querySelector('#todo-input')
    let todo = todoInput.value

    sendTodo(todo)
  })
}

const sendTodo = async (todoText) => {
  console.log('about to send todo:', todoText)

  let dataToSend = {
    text: todoText,
    owner: "alejo4373",
    completed: true,
  };

  try {
    let response = await axios.post(url, dataToSend)
    console.log(response.data)
  } catch(err) {
    console.log('Oops! There was an error')
  }
  
    // .then(response => {
    //   console.log(response.data)
    // })
    // .catch(err => {
    //   console.log("Todo couldn't be added", err)
    // })
}

async function sendTodo2ES5 () {
  return 2
}

const sendTodo2ES6 = async () => {
  return 2
}

sendTodo2ES6().then(res => {
  console.log('promise resolved: ', res)
})


const getTodos = () => {
  // let url = "http://fsw62-todos-api.herokuapp.com/api/todos"
  
  axios.get(url)
    .then((response) => {
      // Anything that needs the data will need to be
      // done here....
      // like displaying todos to the user
      let todos = response.data.payload
    })
    .catch(err => {
      console.log('Oops, There was an error. Please try later')
    })
}

// #Similarities
// Both return promises
// - Both need `.then()` to process response
// Both need url as input
// Both are sending GET request
// Both should always have a catch
// #Diff:
// Fetch doesn't parse response data automatically
// -- Fetch needs 2 `.then()`s. One for parsing
//    the response data
// Fetch by default will send a GET get
//

const getTodosWithFetch = () => {
  let url = "http://fsw62-todos-api.herokuapp.com/api/todos"
  // Write the same network request using fetch
  fetch(url)
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log('FETCH', data.payload)
    })
    .catch(err => {
      console.log('Oops, There was an error. Please try later')
    })
}
