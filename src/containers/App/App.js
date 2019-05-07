import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addMovies } from '../../actions'
// import Splash from '../../components/Splash/Splash'
import {apiKey} from '../../utilities/apiKey.js'

class App extends Component {
  constructor() {
    super();
  }

 fetchMovies = async (e) => {
    e.preventDefault()
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    const response = await fetch(url)
    const results = await response.json()
    console.log(results.results)
    console.log(this.state)
    this.props.addMovies(results.results)
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.fetchMovies}>ENTER</button> 
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies
})

const mapDispatchToProps = (dispatch) => ({
  addMovies: (movies) => dispatch(addMovies(movies))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
