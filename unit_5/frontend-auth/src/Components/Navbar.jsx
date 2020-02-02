import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    const { isUserLoggedIn } = this.props
    return (
      <nav>
        <Link to="/">Home</Link>{" "}
        {!isUserLoggedIn
          ? (
            <>
              <Link to="/signup">Sign-up</Link>{" "}
              <Link to="/login">Log-in</Link>{" "}
            </>
          )
          : null}
        <Link to="/users">Users</Link>
      </nav>
    )
  }
}

export default Navbar
