import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginForm from '../Components/LoginForm';
import SignupForm from '../Components/SignupForm';
import axios from 'axios';

class AuthContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  loginUser = async (e) => {
    try {
      let { data } = await axios.post("/auth/login", this.state)
      this.props.setUser(data.payload)
    } catch (err) {
      console.log('Error', err)
    }
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get('/auth/isUserLoggedIn')
      this.props.setUser(data.payload)
    } catch (err) {
      console.log('ERROR', err)
    }
  }

  signupUser = async (e) => {
    try {
      await axios.post("/auth/signup", this.state)
      this.loginUser()
    } catch (err) {
      console.log('Error', err)
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  renderLoginForm = (routeProps) => {
    const { username, password } = this.state;
    return (
      <LoginForm
        username={username}
        password={password}
        handleChange={this.handleChange}
        loginUser={this.loginUser}
        {...routeProps}
      />
    )
  }

  renderSignupForm = (routeProps) => {
    const { username, password } = this.state;
    return (
      <SignupForm
        username={username}
        password={password}
        handleChange={this.handleChange}
        signupUser={this.signupUser}
        {...routeProps}
      />
    )
  }

  render() {
    const { isUserLoggedIn } = this.props;
    if (isUserLoggedIn) {
      return <Redirect to="/users" />
    }
    return (
      <Switch>
        <Route path="/login" render={this.renderLoginForm} />
        <Route path="/signup" render={this.renderSignupForm} />
      </Switch>
    )
  }
}

export default AuthContainer;
