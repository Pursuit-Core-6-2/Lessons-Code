import React from 'react';

import Post from './Post'
import './Feed.css'

class Feed extends React.Component {

  render() {
    return (
      <div className='feed'>
        <h2>Feed</h2>
        <ul>
          <Post />
          <Post />
          <Post />
          <Post />
        </ul>
      </div>
    )
  }
}

export default Feed;
