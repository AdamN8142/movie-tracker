import React, { Component } from 'react'
import { apiKey } from '../../utilities/apiKey'
import './Card.css'
import { connect } from 'react-redux'
import { toggleFavorite } from '../../actions'
import { addFavorites, deleteFavorites } from '../../utilities/api'

class Card extends Component {

  handleToggleFavorite = (e) => {
    if(!this.props.user.name) {
      alert('please sign in')
    } else if (this.props.user.name && this.props.movie.favorite === true) {
      console.log('hi')
      deleteFavorites(this.props.movie.movie_id, this.props.user.id)
      this.props.toggleFavorite(this.props.movie.id)
    } else {
      console.log('hi')
      addFavorites(
        this.props.movie.id, 
        this.props.user.id, 
        this.props.movie.title,
        this.props.movie.poster_path,
        this.props.movie.release_date,
        this.props.movie.vote_average,
        this.props.movie.overview
        )
      this.props.toggleFavorite(this.props.movie.id)
    }
  }

  render(){
    if(this.props.movie.favorite) {
      return (
        <div>
          <img name={this.props.movie.id} className="movie-img" alt={`${this.props.movie.title}movie poster`} src={`https://image.tmdb.org/t/p/w500${this.props.movie.poster_path}`}/>
          <i className="fas fa-heart" onClick={this.handleToggleFavorite}></i>
        </div>
      )
    }
    if(!this.props.movie.favorite) {
      return (
        <div>
          <img className="movie-img" alt={`${this.props.movie.title}movie poster`} src={`https://image.tmdb.org/t/p/w500${this.props.movie.poster_path}`} />
          <i className="far fa-heart" onClick={this.handleToggleFavorite} ></i>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
    toggleFavorite: (favorite) => dispatch(toggleFavorite(favorite))
})

export default connect(mapStateToProps, mapDispatchToProps)(Card)