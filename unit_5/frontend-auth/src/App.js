import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import { Switch, Route, withRouter } from 'react-router-dom'
import AuthContainer from './Containers/AuthContainer';
import Home from './Components/Home'
import Users from './Components/Users'
import PrivateRoute from './Components/PrivateRoute'
import axios from 'axios';

class App extends React.Component {
  state = {
    user: null,
    isUserLoggedIn: false
  }

  setUser = (user) => {
    console.log('setting user to app state')
    this.setState({
      user: user,
      isUserLoggedIn: true
    })
  }


  logoutUser = async () => {
    console.log('logging out user')
    try {
      await axios.get('/auth/logout')
      this.setState({
        user: null,
        isUserLoggedIn: false
      })
      this.props.history.push('/') // Redirect user to / (home)
    } catch (err) {
      console.log('ERROR', err)
    }
  }

  renderAuthContainer = (routeProps) => {
    return (
      <AuthContainer
        setUser={this.setUser}
        isUserLoggedIn={this.state.isUserLoggedIn}
        {...routeProps}
      />)
  }

  render() {
    console.log(this.props)
    const { isUserLoggedIn } = this.state;
    return (
      <div className="App">
        <Navbar
          logoutUser={this.logoutUser}
          isUserLoggedIn={isUserLoggedIn}
        />
        <Switch>
          <Route path="/login" render={this.renderAuthContainer} />
          <Route path="/signup" render={this.renderAuthContainer} />
          <PrivateRoute path="/users" component={Users} isUserLoggedIn={isUserLoggedIn} />
          <PrivateRoute path="/profile" render={() => <h1> Profile </h1>} isUserLoggedIn={isUserLoggedIn} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}
export default withRouter(App);
