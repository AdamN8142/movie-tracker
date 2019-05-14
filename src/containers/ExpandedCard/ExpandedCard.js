import React from 'react'
import './ExpandedCard.css'

export default function ExpandedCard({title, backdrop_path, release_date, overview}) {
  return (
    <div className='expanded-card'>
      <button>X</button>
      <img className="expanded-photo" alt={`${title}movie poster`} src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} />
      <h1 className="expanded-title">{title}</h1>
      <h4 className="expanded-release">{release_date}</h4>
      <p className="expanded-descrip">{overview}</p>
    </div>
  )
}
