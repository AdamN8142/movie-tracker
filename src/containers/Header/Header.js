import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'




export default class Header extends Component {
  render() {
    return (
      <div>
        <h1>MovieTracker</h1>
        <nav>
          <NavLink to='/' className='nav'>MOVIES</NavLink>
          <NavLink to='/tv' className='nav'>TV SHOW</NavLink>
          <NavLink to='/signin' className='nav'>FAVORITES</NavLink>
        </nav>
      </div>
    )
  }
}