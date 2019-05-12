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
      deleteFavorites(this.props.movie.movie_id, this.props.user.id)
      this.props.toggleFavorite(e.target.name)
    } else {
      this.props.toggleFavorite(e.target.name)
      addFavorites(
        this.props.movie.id, 
        this.props.user.id, 
        this.props.movie.title,
        this.props.movie.poster_path,
        this.props.movie.release_date,
        this.props.movie.vote_average,
        this.props.movie.overview
      )
    }
  }

  render(){
    return (
      <div>
        <img name={this.props.movie.id} className="movie-img" alt={`${this.props.movie.title}movie poster`} src={`https://image.tmdb.org/t/p/w500${this.props.movie.poster_path}`}/>
        <button onClick={this.handleToggleFavorite} name={this.props.movie.id}>pressme</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
    toggleFavorite: (favorite) => dispatch(toggleFavorite(favorite))
})

export default connect(mapStateToProps, mapDispatchToProps)(Card)