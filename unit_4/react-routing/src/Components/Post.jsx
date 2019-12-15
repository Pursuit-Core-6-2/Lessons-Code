import React, { Component } from 'react';
import postsAPI from '../postsAPI';

class Post extends Component {
  constructor() {
    super();
    this.state = {
      post: {}
    }
  }

  componentDidMount() {
    let postId = this.props.match.params.postId
    let data = postsAPI.getOne(postId);
    this.setState({
      post: data
    })
  }

  render() {
    console.log(this.props)

    let { post } = this.state

    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    )
  }
}

export default Post;
