import React, { Component } from 'react';



class Login extends Component {
  constructor(){
    super()
    this.state = {
      email:'',
      password:''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form>
        <input onChange={this.handleChange} name="email"></input>
        <input onChange={this.handleChange} name="password"></input>
        <button>SUBMIT</button>
      </form>
    )
  }
}




export default Login;