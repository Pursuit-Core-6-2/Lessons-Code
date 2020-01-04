import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    imageUrl: "",
    imageFile: null
  }

  handleFileInput = (event) => {
    console.log('file changed')
    this.setState({
      imageFile: event.target.files[0]
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData()
    data.append('image', this.state.imageFile)

    try {
      const res = await axios.post('http://localhost:3001/upload', data)
      console.log(res.data)
      this.setState({
        imageUrl: res.data.imageUrl
      })
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="file" onChange={this.handleFileInput} />
          <input type="submit" value="Upload" />
        </form>
        <img src={this.state.imageUrl} alt='random' />
      </div>
    );
  }
}
export default App;
