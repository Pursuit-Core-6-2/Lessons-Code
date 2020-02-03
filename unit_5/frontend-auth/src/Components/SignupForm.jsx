import React from 'react';

const SignupForm = ({ username, password, handleChange, signupUser }) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    signupUser()
  }

  return (
    <div>
      <h3> Sign-Up </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="***"
          onChange={handleChange}
        />
        <input type="submit" value="Signup" />
      </form>
    </div>
  )
}

export default SignupForm;
