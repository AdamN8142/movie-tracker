import React, { Component } from 'react'
import { apiKey } from '../../utilities/apiKey'
import './Card.css'




export default class Card extends Component {


  render(){
    return (
      <div>
        <img className="movie-img" src={`https://image.tmdb.org/t/p/w500${this.props.movie.poster_path}`}/>
        {/* <p>{this.props.movie.title}</p> */}
      </div>
    )
  }
}



