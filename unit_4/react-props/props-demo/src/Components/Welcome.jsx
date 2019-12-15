import React from 'react';

// const Welcome = (props) => {
//   console.log(props)
//   return <h1>Welcome {props.name}</h1>
// }

class Welcome extends React.Component {

  render() {

    console.log(this.props)
    return <h1>Welcome {this.props.name}</h1>
  }
}

export default Welcome;
