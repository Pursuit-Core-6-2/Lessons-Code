import React, { Component } from 'react';
import axios from 'axios';

class BreedSelector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      breeds: [],
      selectedBreed: ''
    }
  }

  componentDidMount() {
    this.getDogBreeds();
  }

  handleBreedChange = (event) => {
    const newBreed = event.target.value
    this.setState({
      selectedBreed: newBreed
    })

    this.props.getDogPicture(newBreed);
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
      selectedBreed: ''
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
    const { getDogPicture } = this.props;
    const { selectedBreed } = this.state;
    getDogPicture(selectedBreed)
  }

  render() {
    const { breeds, selectedBreed } = this.state;

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
        <button onClick={this.handleNewDogButton}>New Dog</button>
        <button onClick={this.resetSelect}>Reset</button>
      </>
    )
  }
}

export default BreedSelector;
