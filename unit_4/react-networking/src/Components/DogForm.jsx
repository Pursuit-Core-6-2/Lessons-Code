import React, { Component } from 'react';
import axios from 'axios';

class DogForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      breeds: [],
      selectedBreed: '',
      numOfDogs: ''
    }
  }

  componentDidMount() {
    this.getDogBreeds();
  }

  handleBreedChange = (event) => {
    const newBreed = event.target.value
    const { numOfDogs } = this.state;
    this.setState({
      selectedBreed: newBreed
    })

    this.props.getDogPictures(newBreed, numOfDogs);
  }

  // Instead of .map in render. This function can be invoked
  populateSelect = () => {
    const { breeds } = this.state;
    let breedOptions = [];
    breeds.forEach((breed) => {
      breedOptions.push(
        <option>{breed}</option>
      )
    })
    return breedOptions;
  }

  resetSelect = (event) => {
    this.setState({
      selectedBreed: '',
      numOfDogs: '1'
    })
  }

  // Make Network request to retrieve all dog breeds
  getDogBreeds = async () => {
    let dogBreedAPIURL = 'https://dog.ceo/api/breeds/list/all'
    try {
      const response = await axios.get(dogBreedAPIURL)
      const data = response.data
      const allBreeds = Object.keys(data.message)
      console.log("types of dog", allBreeds)

      this.setState({
        breeds: allBreeds
      })

      // this.breeds = allBreeds;
    } catch (error) {
      console.log("Oops All Errors!", error)
    }
  }

  handleNewDogButton = (event) => {
    const { getDogPictures } = this.props;
    const { selectedBreed, numOfDogs } = this.state;
    getDogPictures(selectedBreed, numOfDogs)
  }

  handleNumOfDogs = (e) => {
    this.setState({
      numOfDogs: e.target.value
    })
  }

  render() {
    const { breeds, selectedBreed, numOfDogs } = this.state;

    return (
      <>
        <select onChange={this.handleBreedChange} value={selectedBreed}>
          <option value=""></option>
          {
            breeds.map(breed => {
              return <option value={breed}>{breed}</option>
            })

            // or call this.populateSelect()
          }
        </select>
        <input type="number" min="1" max="10" onChange={this.handleNumOfDogs} value={numOfDogs} />
        <button onClick={this.handleNewDogButton}>New Dog</button>
        <button onClick={this.resetSelect}>Reset</button>
      </>
    )
  }
}

export default DogForm;
