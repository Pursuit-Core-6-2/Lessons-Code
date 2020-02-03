import React from 'react';
import './App.css';
class App extends React.Component {
  constructor() {
    super()
    this.initialState = {
      usernameValue: '',
      password: '',
      submitted: false,
      notRobot: false,
      title: ''
    }

    this.state = this.initialState
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    if (this.allFieldsValid()) {
      console.log('Form submitted')
      this.setState({
        submitted: true
      })
    }
  }

  handleUsernameChange = (event) => {
    this.setState({
      usernameValue: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  resetForm = (event) => {
    event.preventDefault();
    this.setState(this.initialState)
  }

  handleCheckboxChange = (event) => {
    console.log('checkbox was checked or unchecked', event.target.checked)

    this.setState({
      notRobot: event.target.checked
    })
  }

  handleSelectChange = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  allFieldsValid = () => {
    return (
      this.state.notRobot &&
      this.state.title &&
      this.state.usernameValue &&
      this.state.password
    );
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    console.log(this.state)
    const {
      usernameValue,
      password,
      submitted,
      notRobot,
      title
    } = this.state;

    if (submitted) {
      return (
        <div>
          <h1> Welcome {usernameValue} !!!</h1>
        </div>
      )
    }

    return (
      <div className="App">
        <h1> Forms with React </h1>

        <form onSubmit={this.handleFormSubmit}>

          <label htmlFor='title'>Title: </label>
          <select
            id='title'
            onChange={this.handleChange}
            value={title}
            name="title"
          >
            <option value="">None</option>
            <option value='mr'>Mr.</option>
            <option value='ms'>Ms.</option>
            <option value='mrs'>Mrs.</option>
            <option value='mx'>Mx.</option>
            <option value='dr'>Dr.</option>
          </select>

          <input
            type="text"
            placeholder="username"
            onChange={this.handleChange}
            value={usernameValue}
            name="usernameValue"
          />
          <input
            type="password"
            placeholder="***"
            value={password}
            onChange={this.handleChange}
            name="password"
          />
          {/* 
          Label wrapping checkbox. Makes it so that clicking the
          lable checks/unchecks the checkbox
          <label> I'm not a robot
            <input
              type="checkbox"
              onChange={this.handleCheckboxChange}
              checked={notRobot}
            ></input>
          </label> 
          */}
          <label htmlFor='not-robot'> I'm not a robot </label>
          <input
            id='not-robot'
            type="checkbox"
            onChange={this.handleCheckboxChange}
            checked={notRobot}
            name="notRobot"
          ></input>


          <button>Send</button>
          <button
            onClick={this.resetForm}
          >
            Reset
          </button>
        </form>
      </div >
    )
  }
}

export default App;
