document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector('#loadUsersButton')
  button.addEventListener('click', loadUsers)
})

function loadUsers() {
  let xhr = new XMLHttpRequest()
  xhr.onreadystatechange = function() {
    if (this.readyState === this.DONE) {
      let parsedResponse = JSON.parse(this.response)
      renderUsersList(parsedResponse.results)
    }
  }
  xhr.open("GET", "https://randomuser.me/api/?results=10")
  xhr.send()
}

const renderUsersList = (users) => {
  // let usersUl = document.createElement('ul');
  let usersUl = document.querySelector('#user-list');
  
  for (let user of users) { 
    let userLi = document.createElement('li')
    userLi.innerText = user.name.first + " " + user.name.last
    usersUl.appendChild(userLi)
  }
}




