import React from 'react';
import logo from './logo.svg';
import './App.css';
import Buttons from './Buttons'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      colorOptions: ["red", "yellow", "blue"],
      colorIndex: 0,
      colorName: "red"
    }
  }

  handleClick = (event) => {
    let counter = this.state.counter;

    // No No
    // this.state.counter = counter + 1;

    // Need the this.setState method
    this.setState({
      counter: counter + 1
    })
  }

  handleMinusClick = () => {
    let counter = this.state.counter
    this.setState({
      counter: counter - 1
    })
  }

  handleChangeTheme = () => {
    let { colorIndex } = this.state
    this.setState({
      colorIndex: colorIndex + 1
    })
  }

  handleChangeTheme2 = () => {
    let { colorIndex } = this.state
    this.setState({
      colorIndex: (colorIndex + 1) % 3
    })
  }

  render() {
    // let counter = this.state.counter;
    let { counter, colorOptions, colorIndex } = this.state
    let color = colorOptions[colorIndex]

    console.log('render was called')
    return (
      <div className={color}>
        <div className="App">
          <p>{counter}</p>
          <Buttons
            handleClick={this.handleClick}
            handleMinusClick={this.handleMinusClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
