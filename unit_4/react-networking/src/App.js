import React, { Component } from 'react';
import axios from 'axios';
// import Selector from './Selector';
import './App.css';
import BreedSelector from './Components/BreedSelector';
import Dog from './Components/Dog';

class App extends Component {
  constructor() {
    super();
    this.state = {
      url: '',
    }
  }

  // Loads an image when the component mounts
  componentDidMount() {
    this.getDogPicture()
  }

  getDogPicture = async (selectedBreed) => {
    // const { selectedBreed } = this.state
    let dogAPIURL = "https://dog.ceo/api/breeds/image/random"

    if (selectedBreed) {
      dogAPIURL = `https://dog.ceo/api/breed/${selectedBreed}/images/random`
    }

    // axios request using try, catch and async, await
    try {
      const { data } = await axios.get(dogAPIURL)
      console.log(data)
      this.setState({
        url: data.message
      })

    } catch (error) {
      console.log('err: ', error)
    }

  }

  render() {
    const { url, breeds, selectedBreed } = this.state

    // Using nested destructuring
    // const { 
    //   state: {
    //     url
    //   },
    //   getDogPicture,
    // } = this
    return (
      <div className="App">
        <h1>Random Dog Pictures v1</h1>
        <BreedSelector getDogPicture={this.getDogPicture} />
        <Dog url={url} />
      </div>
    )
  }
}

export default App;
