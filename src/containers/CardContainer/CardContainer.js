import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMovies, grabFavorites, toggleFavorite } from '../../actions';
import { NavLink } from 'react-router-dom'
import { apiKey } from '../../utilities/apiKey.js';
import Card from '../Card/Card'
import './CardContainer.css'

  export class CardContainer extends Component {
    constructor() {
      super();
      this.state = {
        favorites:false
      }
    }
    
    async componentDidMount() {
      await this.fetchMovies();
      this.matchFavorites()
  }

  matchFavorites = () => {
    let favArr = [];
    this.props.movies.forEach((movie) => {
      this.props.favorites.forEach((fav) => {
        if(movie.id === fav.movie_id) {
          favArr.push(movie) 
        }
      })
    })
    this.props.toggleFavorite(favArr)  
  }

  showAllFavorites = (e) => {
    const {user, router} = this.props
    e.preventDefault()
    if(user.id) {
      this.setState({
        favorites: true
      })
      this.fetchFavorites(user.id)
    } else {
      router.history.push('/signin')
    }
  }

  showAllMovies = () => {
    this.setState({
      favorites: false
    })
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
    const {movies} = this.props
    var moviesToShow
    if(this.state.favorites) {
      moviesToShow = movies.filter(movie => movie.favorite);
    } else {
      moviesToShow = movies
    }
    return moviesToShow;
  }

  render(){ 

    let moviesToShow = this.displayCards();

    return (
      <div>
        <nav className= 'nav-bar'>
            <NavLink value="movies" onClick={this.showAllMovies} to='/' className='nav'>Movies</NavLink>
            <NavLink value='favorites' onClick={this.showAllFavorites} to='/favorites' className='nav'>Favorites</NavLink>
            <NavLink to='/signin' className='nav'>Sign In</NavLink>
          </nav>
        <div className = 'card-container'>
          {
            //need to replace moviesToShow.length with loading screen
            moviesToShow.length && 
            moviesToShow.map((movie, i) => {
              return (
                <Card {...movie} key={i} router={this.props.router} />
              )
            })
          }
        </div>
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
  grabFavorites: (favorites) => dispatch(grabFavorites(favorites)),
  toggleFavorite: (movie) => dispatch(toggleFavorite(movie))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer)