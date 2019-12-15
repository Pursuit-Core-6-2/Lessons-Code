import React from 'react';
import './Post.css'

class Post extends React.Component {
  // constructor() {
  //   super();
  //   this.post = {
  //     title: "Sample Post Title",
  //     imageLink: "https://www.stockvault.net/data/2007/03/01/100169/preview16.jpg",
  //     description: "This is the description of the post"
  //   }
  // }
  post = {
    title: "Sample Post Title",
    imageLink: "https://www.stockvault.net/data/2007/03/01/100169/preview16.jpg",
    description: "This is the description of the post"
  }



  render() {
    return (
      <div className="post">
        <h4>{this.post.title}</h4>
        <img src={this.post.imageLink} />
        <p>{this.post.description}</p>
      </div >

    )
  }
}

export default Post;
