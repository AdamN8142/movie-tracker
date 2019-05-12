import React, { Component } from 'react'
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
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  setCategory: (category)=> dispatch(setCategory(category))
})


export default connect(null, mapDispatchToProps)(Header)
