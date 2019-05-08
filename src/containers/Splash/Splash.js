import React, { Component } from 'react';
import { apiKey } from '../../utilities/apiKey.js';
import { addMovies } from '../../actions';
import { connect } from 'react-redux';


class Splash extends Component {

  fetchMovies = async (e) => {
    e.preventDefault()
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    const response = await fetch(url)
    const results = await response.json()
    this.props.history.push('/home')
    this.props.addMovies(results.results)
  }

  render() {
    return (
      <div>
        <button onClick={this.fetchMovies}>ENTER</button>
      </div>
    )
  }
}

// const mapStateToProps = (state) => ({
//   movies: state.movies
// })

const mapDispatchToProps = (dispatch) => ({
  addMovies: (movies) => dispatch(addMovies(movies))
})

export default connect(null, mapDispatchToProps)(Splash)