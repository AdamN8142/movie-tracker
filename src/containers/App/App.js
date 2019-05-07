import React, { Component } from './node_modules/react';
import { connect } from './node_modules/react-redux'
import { addMovies } from '../../actions'
import Splash from '../components/Splash/Splash'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Splash /> 
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies
})

export default connect(mapStateToProps)(App)
