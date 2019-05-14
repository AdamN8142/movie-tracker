import React, { Component } from 'react';
import Login from '../Login/Login'
import Home from '../../components/Home/Home';
import ExpandedCard from '../ExpandedCard/ExpandedCard';
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom';

export class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/signin' component={Login} />
          <Route path='/favorites' component={Home} />
          <Route path='/movie/:id' render={({ match }) => {
            const { id } = match.params;
            const movie = this.props.movies.find(movie => movie.id === parseInt(id));
              if (movie) {
                return <ExpandedCard {...movie} />
              }
          }} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies
})

export default connect(mapStateToProps)(App)