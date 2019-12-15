import React from 'react';
import './App.css';
import ContactList from './Components/ContactList'
import Feed from './Components/Feed';

const salute = (name) => {
  return "Hello " + name + "!!"
}

function App() {
  return (
    <div className="App">
      <p>{salute("World")}</p>
      <ContactList />
      <Feed />
    </div>
  )
}

export default App;
