import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import { setCategory } from '../../actions'
import { connect } from 'react-redux'

class Header extends Component {


  handleSetCategory = (e) => {
    this.props.setCategory(e.target)
  }


  render() {
    return (
      <div>
        <div className='title'>
        <h1 className= "app-title">[  MOVIEtracker  ]</h1>
        </div>
        <nav className= 'nav-bar'>
          <NavLink value="movies" onClick={this.handleSetCategory} to='/' className='nav'>Movies</NavLink>
          <NavLink to='/tv' className='nav'>Television</NavLink>
          <NavLink value='favorites' onClick={this.handleSetCategory} to='/favorites' className='nav'>Favorites</NavLink>
          <NavLink to='/signin' className='nav'>Sign In</NavLink>
        </nav>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  setCategory: (category)=> dispatch(setCategory(category))
})


export default connect(null, mapDispatchToProps)(Header)
