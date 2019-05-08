import React, { Component } from 'react';
import Splash from '../Splash/Splash'
import Home from '../../components/Home/Home';
import { Switch, Route } from 'react-router-dom'

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route default path='/signin' component={Splash} />
          <Route path='/home' component={Home} />
        </Switch>
      </div>
    )
  }
}
