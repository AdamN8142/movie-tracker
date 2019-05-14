import React, { Component } from 'react';
import { postNewUser, signInUser } from '../../utilities/api'
import { connect } from 'react-redux'
import { saveLogin, signOut, grabFavorites } from '../../actions/index'
import './Login.css'
// import { apiKey } from '../../utilities/apiKey'

class Login extends Component {
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

  handleNewUser = (e) => {
    e.preventDefault()
    postNewUser(this.state.name, this.state.email, this.state.password)
    console.log('hi')
  }

  handleSignIn = async (e) => {
    e.preventDefault()
    const response = await signInUser(this.state.email, this.state.password)
    console.log(response)
    if(response === undefined) {
      alert('Sorry, your username and/or password is incorrect')
    } 
    else if(response.status === 'success') {
      this.props.saveLogin(response)
      this.props.history.push('/')
      this.fetchFavorites(this.props.user.id)
    }
  }

  signOutHandler = (e) => {
    e.preventDefault()
    // const emptyObj = {}
    this.props.signOut()
  }

  fetchFavorites = (id) => {
    console.log('FF')
    const url = `http://localhost:3000/api/users/${id}/favorites`
    fetch(url)
      .then(response => response.json())
      .then(results => this.props.grabFavorites(results.data))
  }

  render() {
    return (
      <div className= "login-page">
      <div className="login-card">
      <h1 className="login-header">[ MOVIEtracker ]</h1>
      <form onSubmit={this.handleNewUser}>
      <div className ="create-login login-container">
        <p className="login-text">NAME :</p>
        <input className="input-field" onChange={this.handleChange} placeholder="Name" name="name"></input>
        <p className="login-text">EMAIL :</p>
        <input className="input-field" onChange={this.handleChange} placeholder="Email" name="email"></input>
        <p className="login-text">PASSWORD :</p>
        <input className="input-field" onChange={this.handleChange} placeholder="Password" name="password"></input>
        <button className="login-button">CREATE ACCOUNT</button>
      </div>
      </form>
      <p className="sign-in-text">Already have an account? Sign in below!</p>
      <form onSubmit={this.handleSignIn}>
      <div className="login-container">
        <input className="input-field" onChange={this.handleChange} placeholder="Email" name="email"></input>
        <input className="input-field" onChange={this.handleChange} placeholder="Password" name="password"></input>
        <button className="login-button">SIGN IN</button>
      </div>
      </form>
      </div>
      <button onClick={this.signOutHandler}>SIGN OUT</button>
      </div>
    )
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