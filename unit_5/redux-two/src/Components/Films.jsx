import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { RECEIVE_FILMS } from '../store/actionTypes';

class Films extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     films: []
  //   }
  // }

  componentDidMount() {
    this.fetchAllFilms();
  }

  // Make network request to the api to get all the films
  fetchAllFilms = async () => {
    const apiUrl = "https://ghibliapi.herokuapp.com/films"
    try {
      const res = await axios.get(apiUrl)
      this.props.receiveFilms(res.data)
    } catch (err) {
      console.log('Error', err)
    }
  }

  render() {
    console.log('props', this.props)
    const { films } = this.props.filmsState
    return (
      <div>
        <h1>Films</h1>
        <ul>{films.map(film => {
          return (
            <li key={film.title}>
              <Link to={`/films/${film.id}`}>{film.title} </Link>
            </li>
          )

        })}</ul>
      </div >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filmsState: state.filmsState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    receiveFilms: (films) => {
      dispatch({
        type: RECEIVE_FILMS,
        payload: films
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Films)
