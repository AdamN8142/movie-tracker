import React, { Component } from 'react'
import { apiKey } from '../../utilities/apiKey'
import './Card.css'
import { connect } from 'react-redux'
import { toggleFavorite, changeFavorite } from '../../actions'
import { addFavorites, deleteFavorites } from '../../utilities/api'

class Card extends Component {
  constructor(){
    super()
    this.state = {
      update: false
    }
  }
  fetchFavorites = (id) => {
    const url = `http://localhost:3000/api/users/${id}/favorites`
    fetch(url)
      .then(response => response.json())
      .then(results => this.props.grabFavorites(results.data))
  } 
  handleToggleFavorite = (e) => {
    if(!this.props.user.name) {
      this.props.router.history.push('/signin')
    } else if (this.props.user.name && this.props.favorite === true) {
      deleteFavorites(this.props.id, this.props.user.id)
      this.props.changeFavorite(this.props.id)
    } else {
      addFavorites(
        this.props.id, 
        this.props.user.id, 
        this.props.title,
        this.props.poster_path,
        this.props.release_date,
        this.props.vote_average,
        this.props.overview
        )
      this.props.changeFavorite(this.props.id)
    }
  }

  render(){
    // const { id, favorite, title, poster_path} = this.props.movie;
    const favImg = this.props.favorite ? 'fas fa-heart' : 'far fa-heart'
    return (
      <div>
        <img className="movie-img" alt={`${this.props.title} movie poster`} onClick={() => {this.props.router.history.push(`/movie/${this.props.id}`)}} src={`https://image.tmdb.org/t/p/w500${this.props.poster_path}`}/>
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