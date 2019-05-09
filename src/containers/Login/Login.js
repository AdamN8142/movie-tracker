import React, { Component } from 'react';
import { postNewUser, signInUser } from '../../utilities/api'

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
      console.log('hi')
      alert('pw incorrect')
    } 
    else if(response.status === 'success') {
      console.log('yay')
      this.props.history.push('/')
    }
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
      </div>
    )
  }
}




export default Login;