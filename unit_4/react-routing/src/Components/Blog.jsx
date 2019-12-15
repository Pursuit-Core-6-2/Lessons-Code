import React, { Component } from 'react';
import postsAPI from '../postsAPI';
import Post from './Post';
import { Link, Route, Switch } from 'react-router-dom';

class Blog extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    let data = postsAPI.getAll();
    this.setState({
      posts: data
    })
  }

  renderLinks = () => {
    const { posts } = this.state;
    return (
      <ul>{
        posts.map(post => {
          return (
            <li>
              <Link to={`/blog/posts/${post.id}`}>{post.title}</Link>
            </li>
          )
        })
      }</ul>
    )
  }

  render() {
    return (
      <div>
        <h1> Blog </h1>
        <Switch>
          <Route exact path="/blog" render={this.renderLinks} />
          <Route path="/blog/posts/:postId" component={Post} />
        </Switch>
      </div>
    )
  }
}

export default Blog;
