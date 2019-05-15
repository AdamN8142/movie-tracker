import React, { Component } from 'react'
import './ExpandedCard.css'
import PropTypes from 'prop-types'

export default class ExpandedCard extends Component {

  returnToMovies = () => {
  
    this.props.history.push('/')
  }
  render() {
    const {title, backdrop_path, release_date, overview, vote_average} = this.props
    return (
      <div className='expanded-card'>
      <div className= 'button-container'>
        <button className ='go-back-button'onClick={this.returnToMovies}>&larr;</button>
      </div>
        <img className="expanded-photo" alt={`${title}movie poster`} src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} />
        <h1 className="expanded-title">{title}</h1>
        <h4 className="expanded-release">{release_date}</h4>
        <p className = "vote-avg">Rating: {vote_average}/10</p>
        <p className="expanded-descrip">{overview}</p>
      </div>
    )
  }
}

ExpandedCard.propTypes = {
  title: PropTypes.string, 
  backdrop_path: PropTypes.string, 
  release_date: PropTypes.string, 
  overview: PropTypes.string
}
