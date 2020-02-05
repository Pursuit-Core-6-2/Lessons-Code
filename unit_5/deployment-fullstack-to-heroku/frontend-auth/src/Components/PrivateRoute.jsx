import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
  const isUserLoggedIn = props.isUserLoggedIn;
  const Component = props.component
  const otherPros = { ...props }

  console.log('PrivateRoute')
  if (isUserLoggedIn) {
    return <Route {...otherPros} component={Component} />
  }
  return <Redirect to="/login" />
}

export default PrivateRoute;
