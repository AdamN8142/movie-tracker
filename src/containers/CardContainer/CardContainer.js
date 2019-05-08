import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMovies } from '../../actions';
import { apiKey } from '../../utilities/apiKey.js';
import Card from '../Card/Card'
import './CardContainer.css'


  class CardContainer extends Component {

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    const response = await fetch(url)
    const results = await response.json()
    this.props.addMovies(results.results)
  }


   displayCards = () => {
    return this.props.movies.map((movie) => {
     return (
        <Card movie={movie} key={movie.id}/>
      )
    })
  }
  

  render(){ 
      return (
        <div className = 'card-container'>
            {this.displayCards()}
        </div>
      )
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies
})  

const mapDispatchToProps = (dispatch) => ({
  addMovies: (movies) => dispatch(addMovies(movies))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer)