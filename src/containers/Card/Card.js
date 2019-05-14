import React, { Component } from 'react'
import './Card.css'
import { connect } from 'react-redux'
import { toggleFavorite, changeFavorite } from '../../actions'
import { addFavorites, deleteFavorites } from '../../utilities/api'

export class Card extends Component {

  fetchFavorites = (id) => {
    const url = `http://localhost:3000/api/users/${id}/favorites`
    fetch(url)
      .then(response => response.json())
      .then(results => this.props.grabFavorites(results.data))
  } 
  handleToggleFavorite = (e) => {
    const {user, router, favorite, id, title, poster_path, release_date, vote_average, overview} = this.props
    if(!user.name) {
      router.history.push('/signin')
    } else if (user.name && favorite === true) {
      deleteFavorites(id, user.id)
      this.props.changeFavorite(id)
    } else {
      addFavorites(
        id, 
        user.id, 
        title,
        poster_path,
        release_date,
        vote_average,
        overview
        )
      this.props.changeFavorite(id)
    }
  }

  render(){
    const { id, favorite, title, poster_path} = this.props;
    const favImg = favorite ? 'fas fa-heart' : 'far fa-heart'
    return (
      <div>
        <img className="movie-img" alt={`${title} movie poster`} onClick={() => {this.props.router.history.push(`/movie/${id}`)}} src={`https://image.tmdb.org/t/p/w500${poster_path}`}/>
        <i className={favImg} onClick={this.handleToggleFavorite}></i>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
    toggleFavorite: (favorite) => dispatch(toggleFavorite(favorite)),
    changeFavorite: (favorite) => dispatch(changeFavorite(favorite))
})

export default connect(mapStateToProps, mapDispatchToProps)(Card)