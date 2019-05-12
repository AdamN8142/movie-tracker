import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMovies, grabFavorites } from '../../actions';
import { apiKey } from '../../utilities/apiKey.js';
import Card from '../Card/Card'
import './CardContainer.css'

  class CardContainer extends Component {
    constructor() {
      super();
      this.state = {
        favorites:false,
        favArr: []
      }
  }

  componentDidMount() {
    this.fetchMovies();
  }

  componentDidUpdate() {
    if(!this.props.favorites && this.props.user.id){
      this.fetchFavorites(this.props.user.id)
    }
  }

  toggleAllFavorites = async () => {
    if(this.props.user.id) {
      let currentFavorites = this.state.favorites
      this.setState({
        favorites:!currentFavorites
      })
      this.fetchFavorites(this.props.user.id)
    } else {
      alert("Please sign in!")
    }
  }
  
  fetchMovies = async () => { 
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    const response = await fetch(url)
    const results = await response.json()
    this.props.addMovies(results.results)
  }
  
  fetchFavorites = (id) => {
    const url = `http://localhost:3000/api/users/${id}/favorites`
    fetch(url)
    .then(response => response.json())
    .then(results => this.props.grabFavorites(results.data))
  }
  
  displayCards = () => {
    var moviesToShow
    if(this.state.favorites) {
      moviesToShow = this.props.favorites
    } else {
      moviesToShow = this.props.movies
    }
      return moviesToShow.map((movie) => {
        return (
          <Card movie={movie} key={movie.id} />
        )
      })
  }

  render(){ 
    return (
      <div className = 'card-container'>
          {this.displayCards()}
          <button onClick={this.toggleAllFavorites}>FAVORITES</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  user: state.user,
  favorites: state.favorites
})  

const mapDispatchToProps = (dispatch) => ({
  addMovies: (movies) => dispatch(addMovies(movies)),
  grabFavorites: (favorites) => dispatch(grabFavorites(favorites))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer)