import React from "react";
import Greeting from "./Greeting.js";

class GreetingContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      greetingsNumber: 1
    };
    console.log("GreetingContainer constructor");
  }

  renderGreetings() {
    const { greetingsNumber } = this.state;
    let greetingsComponents = [];

    for (let i = 0; i < greetingsNumber; i++) {
      greetingsComponents.push(
        <Greeting key={i} id={String.fromCharCode(i + 65)} />
      );
    }
    // Could have also been done with these slick approach.
    // Array(this.state.greetingsNumber).fill(<Greeting />)
    return greetingsComponents;
  }

  componentDidMount() {
    console.log("GreetingContainer mounted");
  }

  componentDidUpdate() {
    console.log(
      "GreetingContainer updated: Now with " +
        this.state.greetingsNumber +
        " greetings"
    );
  }

  addGreeting = () => {
    this.setState({
      greetingsNumber: this.state.greetingsNumber + 1
    });
  };

  removeGreeting = () => {
    this.setState({
      greetingsNumber: Math.max(0, this.state.greetingsNumber - 1)
    });
  };

  render() {
    console.log("GreetingContainer render");
    return (
      <div>
        {this.renderGreetings()}
        <div>
          <button onClick={this.addGreeting}>+</button>
          <button onClick={this.removeGreeting}>-</button>
        </div>
      </div>
    );
  }
}

export default GreetingContainer;
