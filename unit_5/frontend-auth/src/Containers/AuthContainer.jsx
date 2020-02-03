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

  componentDidMount() {
    this.checkUserLoggedIn()
  }

  handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    this.setState({
      [inputName]: inputValue
    })
  }

  checkUserLoggedIn = async () => {
    console.log('Checking if user logged in')
    try {
      const { data } = await axios.get("/auth/isUserLoggedIn")
      this.props.setUser(data.payload)
    } catch (err) {
      console.log('ERROR', err)
    }
  }


  signupUser = async () => {
    // Make network request to /auth/signup to signup user
    // then login user
    console.log('Signingup user')
    try {
      await axios.post('/auth/signup', this.state)
      this.loginUser()

    } catch (err) {
      console.log('ERROR', err)
    }
  }

  loginUser = async () => {
    // Make network request to /auth/login to login user
    console.log('Logging user')
    try {
      const { data } = await axios.post('/auth/login', this.state)

      const user = data.payload
      this.props.setUser(user)
      this.props.history.push('/users') // Redirect user to / (home)

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
