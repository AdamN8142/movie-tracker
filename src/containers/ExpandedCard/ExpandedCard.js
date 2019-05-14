import React, { Component } from 'react'
import './ExpandedCard.css'

export default class ExpandedCard extends Component {

  returnToMovies = () => {
  
    this.props.history.push('/')
  }
  render() {
    const {title, backdrop_path, release_date, overview} = this.props
    return (
      <div className='expanded-card'>
        <button onClick={this.returnToMovies}>X</button>
        <img className="expanded-photo" alt={`${title}movie poster`} src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} />
        <h1 className="expanded-title">{title}</h1>
        <h4 className="expanded-release">{release_date}</h4>
        <p className="expanded-descrip">{overview}</p>
      </div>
    )
  }
  }
