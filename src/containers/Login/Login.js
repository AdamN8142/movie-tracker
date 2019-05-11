import React, { Component } from 'react';
import { postNewUser, signInUser } from '../../utilities/api'
import { connect } from 'react-redux'
import { saveLogin, signOut } from '../../actions/index'
import './Login.css'

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
    }
  }

  signOutHandler = (e) => {
    e.preventDefault()
    // const emptyObj = {}
    this.props.signOut()
  }

  render() {
    return (
      <div className= "login-page">
      <div className="login-card">
      <h1 className="login-header">[ MOVIEtracker ]</h1>
      <form onSubmit={this.handleNewUser}>
      <div className ="create-login login-container">
        <input className="input-field" onChange={this.handleChange} placeholder="Name" name="name"></input>
        <input className="input-field" onChange={this.handleChange} placeholder="Email" name="email"></input>
        <input className="input-field" onChange={this.handleChange} placeholder="Password" name="password"></input>
        <button className="login-button">CREATE ACCOUNT</button>
      </div>
      </form>
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

// const mapStateToProps = (state) => {
//   user: 
// }

const mapDispatchToProps = (dispatch) => ({
  saveLogin: (user) => dispatch(saveLogin(user)),
  signOut: (user) => dispatch(signOut(user))
})


export default connect(null, mapDispatchToProps)(Login)