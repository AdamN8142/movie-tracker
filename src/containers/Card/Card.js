import React, { Component } from 'react'
import { apiKey } from '../../utilities/apiKey'
import './Card.css'
import { connect } from 'react-redux'
import { toggleFavorite } from '../../actions'




class Card extends Component {

  handleAddFavorite = (e) => {
    console.log(e.target.name)
    this.props.addFavorite(e.target.name)
  }
  
  handleToggleFavorite = (e) => {
    console.log('hi')
    console.log(e.target.name)
    this.props.toggleFavorite(e.target.name)
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
  favorites: state.favorites
})

const mapDispatchToProps = (dispatch) => ({
    toggleFavorite: (favorite) => dispatch(toggleFavorite(favorite))
})

export default connect(mapStateToProps, mapDispatchToProps)(Card)