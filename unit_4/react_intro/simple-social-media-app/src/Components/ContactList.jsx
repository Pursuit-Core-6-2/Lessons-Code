import React from 'react';

class ContactList extends React.Component {

  // Most important function in a class Component
  render() {
    return (
      <div>
        <h1> Contacts </h1>
        <ul>
          <li>Andrew Clark</li>
          <li>Brian Vaughn</li>
          <li>Dan Abramov</li>
          <li>Flarnie Marchan</li>
        </ul>
      </div>
    )
  }

}

export default ContactList;
