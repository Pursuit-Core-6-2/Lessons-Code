document.addEventListener('DOMContentLoaded', () => {
  loadUsers();
  const form = document.querySelector('#addUserForm');
  form.addEventListener('submit', addUserFormSubmitted);
});

async function loadUsers() {
  const usersList = document.querySelector('#usersList');
  usersList.innerHTML = "";

  try {
    const response = await axios.get(`http://localhost:3000/users`);
    const users = response.data.payload;

    users.forEach((user) => {
      let listItem = document.createElement("li");
      listItem.innerText = `${user.firstname} ${user.lastname}, age ${user.age}`;
      usersList.appendChild(listItem);
    });
  } catch (err) {
    console.log(err)
  }
}

async function addUserFormSubmitted(event) {
  event.preventDefault();

  const firstname = document.querySelector('#firstNameInput').value;
  const lastname = document.querySelector('#lastNameInput').value;
  const age = document.querySelector('#ageInput').value;

  try {
    let response = await axios.post(`http://localhost:3000/users/register`, { firstname, lastname, age });
    loadUsers();
  } catch (err) {
    console.log(err)
  }
}
