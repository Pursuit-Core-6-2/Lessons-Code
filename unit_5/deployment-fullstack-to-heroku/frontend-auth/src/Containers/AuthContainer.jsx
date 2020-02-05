import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import LoginForm from '../Components/LoginForm'
import SignupForm from '../Components/SignupForm'
import axios from 'axios';

class AuthContainer extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    this.setState({
      [inputName]: inputValue
    })
  }

  signupUser = async () => {
    // Make network request to /auth/signup to signup user
    // then login user
    console.log('Signingup user')
    try {
      const API_URL = process.env.REACT_APP_API_URL;
      await axios.post(`/api/auth/signup`, this.state)
      this.loginUser()

    } catch (err) {
      console.log('ERROR', err)
    }
  }

  loginUser = async () => {
    // Make network request to /auth/login to login user
    console.log('Logging user')
    try {
      const API_URL = process.env.REACT_APP_API_URL;
      const { data } = await axios.post(`/api/auth/login`, this.state)

      const user = data.payload
      this.props.setUser(user)

    } catch (err) {
      console.log('ERROR', err)
    }
  }

  renderSignupForm = () => {
    const { username, password } = this.state
    return (
      <SignupForm
        handleChange={this.handleChange}
        username={username}
        password={password}
        signupUser={this.signupUser}
      />
    )
  }

  renderLoginForm = () => {
    const { username, password } = this.state
    return (
      <LoginForm
        handleChange={this.handleChange}
        username={username}
        password={password}
        loginUser={this.loginUser}
      />
    )
  }

  render() {
    const { isUserLoggedIn } = this.props;
    return (
      <div>
        <h2>AuthContainer</h2>
        {
          isUserLoggedIn
            ? <Redirect to="/profile" />
            : (
              <Switch>
                <Route path="/login" render={this.renderLoginForm} />
                <Route path="/signup" render={this.renderSignupForm} />
              </Switch>
            )
        }
      </div>
    )
  }
}

export default AuthContainer;
