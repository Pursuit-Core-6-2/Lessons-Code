// Form to search for gifs by keyword
// A list of results of the search
import React, { Component } from 'react';
import axios from 'axios';
import API_KEY from '../secrets';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: '',
      gifs: []
    }
  }

  handleSearchTerm = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { searchTerm } = this.state;
    console.log('about to search gifs for', searchTerm)
    try {
      const params = `?api_key=${API_KEY}&q=${searchTerm}`
      const url = `https://api.giphy.com/v1/gifs/search${params}`
      let res = await axios.get(url)
      this.setState({
        gifs: res.data.data
      })
      console.log(res.data);
    } catch (err) {
      console.log('ERROR', err)
    }
  }

  render() {
    const { searchTerm, gifs } = this.state;
    return (
      <div>
        <h1> Giffe. Search for any gif </h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            onChange={this.handleSearchTerm}
            value={searchTerm}
          />
          <input type="submit" />
        </form>
        <div>{
          gifs.map(gif => {
            return (
              <Link to={`/gif/${gif.id}`} key={gif.id}>
                <img src={gif.images.preview_gif.url} alt={gif.title} />
                <p>{gif.title}</p>
              </Link>
            )
          })
        }</div>
      </div>
    )
  }
}

export default Home;
