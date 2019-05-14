import React from 'react'

export default function ExpandedCard({title, backdrop_path, release_date, overview}) {
  return (
    <div className='expanded-card'>
      <img alt={`${title}movie poster`} src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} />
      <h1>{title}</h1>
      <h4>{release_date}</h4>
      <p>{overview}</p>
    </div>
  )
}
