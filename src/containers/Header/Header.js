import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'





export default class Header extends Component {
  render() {
    return (
      <div>
        <div className='title'>
        <h1 className= "app-title">[  MOVIEtracker  ]</h1>
        </div>
        <nav className= 'nav-bar'>
          <NavLink to='/' className='nav'>Movies</NavLink>
          <NavLink to='/tv' className='nav'>Television</NavLink>
          <NavLink to='/signin' className='nav'>Favorites</NavLink>
        </nav>
      </div>
    )
  }
}