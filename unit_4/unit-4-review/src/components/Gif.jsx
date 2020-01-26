import React, { Component } from 'react';
import axios from 'axios';
import API_KEY from '../secrets';

class Gif extends Component {
  constructor() {
    super();
    this.state = {
      upvotes: 0,
      downvotes: 0,
      gif: null
    }
  }

  handleUpVote = (e) => {
    const { upvotes } = this.state
    this.setState({
      upvotes: upvotes + 1
    })
  }

  handleDownVote = (e) => {
    const { downvotes } = this.state
    this.setState({
      downvotes: downvotes + 1
    })
  }

  async componentDidMount() {
    const { id } = this.props.match.params
    try {
      const url = `https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`
      const res = await axios.get(url)
      this.setState({
        gif: res.data.data
      })
    } catch (err) {
      console.log('ERROR', err)
    }
  }

  render() {
    const { gif, upvotes, downvotes } = this.state;

    if (!gif) {
      return <div>Loading ...</div>
    }

    return (
      <div>
        <h1> Gif </h1>
        <img src={gif.images.original.url} alt="moving gif" />
        <div>
          Upvotes: {upvotes}
          <button onClick={this.handleUpVote} >
            <span role="img" aria-label="up arrow">⬆️</span>
          </button>
        </div>
        <div>
          Downvotes: {downvotes}
          <button onClick={this.handleDownVote}>
            <span role="img" aria-label="down arrow"> ⬇️</span>
          </button>
        </div>
      </div>
    )
  }
}

export default Gif;
