import { Route, Redirect } from 'react-router-dom'

import React from 'react';

const PrivateRoute = (props) => {
  const { component: Component, isUserLoggedIn, ...rest } = props

  const renderComponentOrRedirect = () => {
    if (isUserLoggedIn) {
      return <Component />
    }
    return (
      <Redirect to={{
        pathname: '/login',
        state: { referrer: props.location.pathname }
      }} />
    )
  }

  return (
    <Route {...rest} render={renderComponentOrRedirect} />
  )
}


export default PrivateRoute;
