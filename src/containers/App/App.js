import React, { Component } from 'react';
import Login from '../Login/Login'
import Home from '../../components/Home/Home';
import { Switch, Route } from 'react-router-dom';
import { addMovies } from '../../actions';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route default path='/' component={Home} />
          <Route path='/signin' component={Login} />
        </Switch>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  addMovies: (movies) => dispatch(addMovies(movies))
})

//set the default page to home
//

export default connect(null, mapDispatchToProps)(App)