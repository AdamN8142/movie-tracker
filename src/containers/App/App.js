import React, { Component } from 'react';
import Login from '../Login/Login'
import Home from '../../components/Home/Home';
import { Switch, Route } from 'react-router-dom';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact default path='/' component={Home} />
          <Route path='/signin' component={Login} />
        </Switch>
      </div>
    )
  }
}