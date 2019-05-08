import React, { Component } from 'react'
import { apiKey } from '../../utilities/apiKey'




export default class Card extends Component {


  render(){
    return (
      <div>
        <h1>{this.props.movie.title}</h1>
        <img src={`https://image.tmdb.org/t/p/w500${this.props.movie.poster_path}`}/>
      </div>
    )
  }
}

