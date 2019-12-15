import React from "react";

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello"
    };
    this.addBang = this.addBang.bind(this);
    this.removeBang = this.removeBang.bind(this);
    console.log(`Greeting component ${this.props.id} constructor called`);
  }

  componentDidMount = () => {
    console.log(`Greeting component ${this.props.id} mounted -->`);
  };

  componentDidUpdate() {
    console.log(
      `Greeting component ${this.props.id} updated with new message: ` +
        this.props.message
    );
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.id !== this.props.id) {
  //     return nextProps;
  //   }
  //   return false
  // }

  componentWillUnmount() {
    console.log(
      `Greeting component ${this.props.id} about to unmount with message: ` +
        this.state.message
    );
  }

  addBang() {
    this.setState({
      message: this.state.message + "!"
    });
  }

  removeBang() {
    const lastChar = this.state.message[this.state.message.length - 1];
    if (lastChar === "!") {
      this.setState({
        message: this.state.message.slice(0, -1)
      });
    }
  }

  render() {
    console.log(`Greeting component ${this.props.id} render called`);
    return (
      <p>
        {this.state.message}
        <button onClick={this.addBang}>Add '!'</button>
        <button onClick={this.removeBang}>Remove '!'</button>
      </p>
    );
  }
}

export default Greeting;
