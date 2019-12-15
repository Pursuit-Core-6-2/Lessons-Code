import React, { Component } from "react";
import axios from "axios";

class Selector extends Component {
  constructor() {
    super();
    this.state = {
      breeds: ''
    };
  }

  componentDidMount() {
    this.getBreeds();
  }

  getBreeds = () => {
    axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then(({ data: { message } }) => {
        console.log(message)
        this.setState({
          breeds: message
        })
      })
      .catch(err => {
        console.log("error fetching breeds");
      });
  };

  render() {
    const {
      state: {
        breeds
      },
    } = this;

    return (
      <select name="" id="">
        {Object.keys(breeds).map(breed => {
          if (!breeds[breed].length) {
            return (
              <option value={breed}>{breed}</option>
            )
          } else {
            return (
              <>
                <option value={breed}>{breed}</option>
                <>
                  {breeds[breed].map(sub => {
                    return (<option value={breed + '/' + sub}>{"->  " + sub}</option>)
                  })}
                </>
              </>
            )
          }
        })}
      </select>
    );
  }
}


export default Selector;
