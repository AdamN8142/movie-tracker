import {favoritesReducer} from './favoritesReducer'
import * as actions from '../actions/index'

describe('favoritesReducer', () => {

  it('should return the initial state', () => {
    const expected = [];
    const result = favoritesReducer(undefined, {});
    expect(result).toEqual(expected);
  })

  it('should map favorites and add favorite:true', () => {
    const favorites = [
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
      favorite: true
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
      favorite: true
    }]
    
    
    const result = favoritesReducer([], actions.grabFavorites(favorites))

    expect(result).toEqual(expected)
  })

})