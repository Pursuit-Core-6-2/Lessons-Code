import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import axios from 'axios';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AuthContainer from './Containers/AuthContainer';
import Users from './Components/Users';
import PrivateRoute from './Components/PrivateRoute';

class App extends React.Component {
  state = {
    isUserLoggedIn: false,
    user: null
  }

  setUser = (user) => {
    this.setState({
      user: user,
      isUserLoggedIn: true
    })
  }



  renderAuthContainer = (routerProps) => {
    const { isUserLoggedIn } = this.state
    return (
      <AuthContainer
        setUser={this.setUser}
        isUserLoggedIn={isUserLoggedIn}
      />
    )
  }

  render() {
    const { isUserLoggedIn } = this.state
    return (
      <div className="App">
        <Navbar isUserLoggedIn={isUserLoggedIn} />

        <Switch>
          <Route path="/login" render={this.renderAuthContainer} />
          <Route path="/signup" render={this.renderAuthContainer} />
          <PrivateRoute path="/users" isUserLoggedIn={isUserLoggedIn} component={Users} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}
export default App;
