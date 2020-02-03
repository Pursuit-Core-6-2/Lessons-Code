# Front-End User Authentication Approach in conjuntion with an Express Server

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


**Notes:**

* Redirect user when login successful to `/profile`. This is accomplished by checking `isUserLoggedIn` which comes from `App` through props into `AuthContainer`. If `isUserLoggedIn` is `true` then redirect the user.

* Redirect user when trying to access `/login` or `/signup` to `/profile` if they are already logged in. This is accomplished by passing `isUserLoggedIn` from the App state to the `AuthContainer`. If the user is logged in he/she will be redirected to `/profile`

* Redirect user when trying to access a protected route (`/profile` or `/users`) without being authenticated to `/login`. This is accomplished by our `PrivateRoute` component. This component checks if we have a user in the App state, if so it renders its child component otherwise it redirects to `/login`

* Ideally if a user goes to a private route like `/profile` without being authenticated we can take note of that and upon successful login redirect back to the place they came from (referrer) say `/profile`. This can be accomplished by passing an object to the `to` prop or `Redirect` with two properties `pathname` and state like so: 

```jsx
<Redirect 
  to={{
    pathname: "/login",
    state: { referrer: props.location.pathname }
  }} 
/>
```

* Redirect user when logging out to home `/`. This is accomplished by `history.push('/')` in `App.logoutUser()`. The `history` prop is not passed to App because the App Component is not rendered within any route. Calling `withRouter(App)` gives the `App` access to route props like `history`.


* If we have our private route without providing a referrer when redirecting, if a user is in a protected route like `/users` and the page is refreshed, because the private route is checking `isUserLoggedIn`. `isUserLoggedIn` will takes some time and its in the `App.componentDidMount` 

* **Puzzle**
  * While being in `/users` if the users refreshes the page because `/users` is a private route and the user is not logged in in our state yet (because `App` hasn't mounted and the net request takes time) the user gets redirected to `/login`. Being in `/login` since it is rendered by `AuthContainer` and `AuthContainer` checks if the user is logged in by looking at `isUserLoggedIn` (come in props sent from `App`), once the app finishes mounting and the user has been set in state due to an active session in the backend `AuthContainer` will receive `isUserLoggedIn` as `true` and will redirect the user to `/profile`. This is less than ideal because the user intended to go to `/users` and ended in `/profile`. I think the user should neve have been taken to `/login` and instead sort of wait for the `checkUserLoggedIn` and be shown `/users` if the user is authenticated.
  * Should the user be redirected to `/login` without the `checkUserLoggedIn` having finished with succes or failure?
  * **One Fix**: Implementation of `Redirect` with `to` as object and `referrer` property is necessary to fix this.
