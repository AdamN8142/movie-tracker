import React, { Component } from 'react';
import { postNewUser, signInUser } from '../../utilities/api'
import { connect } from 'react-redux'
import { saveLogin, signOut, grabFavorites } from '../../actions/index'
import './Login.css'
import PropTypes from 'prop-types'

export class Login extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      email:'',
      password:''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleNewUser = async (e) => {
    e.preventDefault()
    await postNewUser(this.state.name, this.state.email, this.state.password)
    this.handleSignIn(e)
    this.props.history.push('/')
  }

  handleSignIn = async (e) => {
    e.preventDefault()
    const response = await signInUser(this.state.email, this.state.password)
    if(response === undefined) {
      alert('Sorry, your username and/or password is incorrect')
    } 
    else if(response.status === 'success') {
      await this.props.saveLogin(response)
      this.fetchFavorites(response.data.id)
      this.props.history.push('/')
    }
  }

  signOutHandler = (e) => {
    e.preventDefault()
    this.props.signOut()
  }

  fetchFavorites = (id) => {
    const url = `http://localhost:3000/api/users/${id}/favorites`
    fetch(url)
      .then(response => response.json())
      .then(results => this.props.grabFavorites(results.data))
  }

  render() {
    if(this.props.user.id) {
      return (
        <div className="login-page">
          <div className='login-card'>
            <p className="sign-in-text">Are you sure you want to sign out?</p>
            <div className="login-container">
              <button className="login-button" onClick={this.signOutHandler}>SIGN OUT</button>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className= "login-page">
        <div className="login-card">
        <h1 className="login-header">[ MOVIEtracker ]</h1>
        <form onSubmit={this.handleNewUser}>
        <div className ="create-login login-container">
          <p className="login-text">NAME :</p>
          <input className="input-field" onChange={this.handleChange} placeholder="Name" name="name"></input>
          <p className="login-text">EMAIL :</p>
          <input className="input-field" onChange={this.handleChange} type="email" placeholder="Email" name="email"></input>
          <p className="login-text">PASSWORD :</p>
          <input className="input-field" onChange={this.handleChange} type="password" placeholder="Password" name="password"></input>
          <button className="login-button">CREATE ACCOUNT</button>
        </div>
        </form>
        <p className="sign-in-text">Already have an account? Sign in below!</p>
        <form onSubmit={this.handleSignIn}>
        <div className="login-container">
          <input className="input-field" onChange={this.handleChange} type="email" placeholder="Email" name="email"></input>
          <input className="input-field" onChange={this.handleChange} type="password" placeholder="Password" name="password"></input>
          <button className="login-button">SIGN IN</button>
        </div>
        </form>
        </div>
        <button onClick={this.signOutHandler}>SIGN OUT</button>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  saveLogin: (user) => dispatch(saveLogin(user)),
  signOut: (user) => dispatch(signOut(user)),
  grabFavorites: (favorite) => dispatch(grabFavorites(favorite))
})


export default connect(mapStateToProps, mapDispatchToProps)(Login)

Login.propTypes = {
  user: PropTypes.object,
  saveLogin: PropTypes.func,
  signOut: PropTypes.func,
  grabFavorites: PropTypes.func
}