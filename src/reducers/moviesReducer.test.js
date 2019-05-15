import { moviesReducer } from './moviesReducer'
import * as actions from '../actions/index'

describe('favoritesReducer', () => {

  it('should return the initial state', () => {
    const expected = [];
    const result = moviesReducer(undefined, {});
    expect(result).toEqual(expected);
  })

  it('should map movies and add favorite:false', () => {
    const movies = [
      {
        title: 'Harry Potter',
        release: 2006,
        poster: 'fds35235/',
        backdrop: '3425/',
        rating: 3.7,
        summary: 'Youre a wizard harry',
        id: 2,
        genres: ['scifi', 'adventure']
      },
      {
        title: 'Harry Potter',
        release: 2006,
        poster: 'fds35235/',
        backdrop: '3425/',
        rating: 3.7,
        summary: 'Youre a wizard harry',
        id: 3,
        genres: ['scifi', 'adventure'],
      }
    ];
    const expected = [{
      title: 'Harry Potter',
      release: 2006,
      poster: 'fds35235/',
      backdrop: '3425/',
      rating: 3.7,
      summary: 'Youre a wizard harry',
      id: 2,
      genres: ['scifi', 'adventure'],
      favorite: false
    },
    {
      title: 'Harry Potter',
      release: 2006,
      poster: 'fds35235/',
      backdrop: '3425/',
      rating: 3.7,
      summary: 'Youre a wizard harry',
      id: 3,
      genres: ['scifi', 'adventure'],
      favorite: false
    }]


    const result = moviesReducer([], actions.addMovies(movies))

    expect(result).toEqual(expected)
  })

  

})