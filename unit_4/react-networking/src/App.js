import React, { Component } from 'react';
import axios from 'axios';
// import Selector from './Selector';
import './App.css';
import DogForm from './Components/DogForm';
import DogList from './Components/DogList';
import Spinner from './Components/Spinner'

class App extends Component {
  constructor() {
    super();
    this.state = {
      urls: [],
      picturesLoading: true
    }
  }

  // Loads an image when the component mounts
  componentDidMount() {
    this.getDogPictures()
  }

  getDogPictures = async (selectedBreed, numOfDogs) => {
    // const { selectedBreed } = this.state


    this.setState({
      picturesLoading: true
    })

    let dogAPIURL = `https://dog.ceo/api/breeds/image/random/${numOfDogs}`

    if (selectedBreed) {
      dogAPIURL = `https://dog.ceo/api/breed/${selectedBreed}/images/random/${numOfDogs}`
    }

    // axios request using try, catch and async, await
    try {
      const { data } = await axios.get(dogAPIURL)
      console.log(data)
      this.setState({
        urls: data.message,
      })

      this.stopSpinner();

    } catch (error) {
      console.log('err: ', error)
    }
  }

  stopSpinner = () => {
    this.setState({
      picturesLoading: false
    })
  }

  render() {
    const { urls, picturesLoading } = this.state

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
        <DogForm getDogPictures={this.getDogPictures} />
        {
          picturesLoading
            ? <Spinner />
            : <DogList urls={urls} stopSpinner={this.stopSpinner} />
        }
      </div>
    )
  }
}

export default App;
