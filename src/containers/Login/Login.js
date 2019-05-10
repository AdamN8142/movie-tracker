import React, { Component } from 'react';
import { postNewUser, signInUser } from '../../utilities/api'
import { connect } from 'react-redux'
import { saveLogin, signOut } from '../../actions/index'

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
      <div>
      <form onSubmit={this.handleNewUser}>
        <input onChange={this.handleChange} name="name"></input>
        <input onChange={this.handleChange} name="email"></input>
        <input onChange={this.handleChange} name="password"></input>
        <button>SUBMIT</button>
      </form>
      <form onSubmit={this.handleSignIn}>
        <input onChange={this.handleChange} name="email"></input>
        <input onChange={this.handleChange} name="password"></input>
        <button>SUBMIT</button>
      </form>

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