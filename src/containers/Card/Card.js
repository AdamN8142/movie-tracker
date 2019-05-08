import React, { Component } from 'react'
import { apiKey } from '../../utilities/apiKey'




export default class Card extends Component {


  render(){
    return (
      <div>
        <h1>{this.props.movie.title}</h1>
        <img src={`https://image.tmdb.org/t/p/w500${this.props.movie.backdrop_path}`}/>
      </div>
    )
  }
}


//poster path 
// /or06FN3Dka5tukK1e9sl16pB3iy.jpg