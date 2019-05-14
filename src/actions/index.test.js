import * as actions from './index'

describe('actions', () => {
  it('should return a type of ADD_MOVIES with an array of movies', () => {
    const movies = [{a:'a'}, {b:'b'}]

    const expected = {
      type: 'ADD_MOVIES',
      movies
    }

    const results = actions.addMovies(movies)

    expect(results).toEqual(expected)
  })

  it('should return a type of SAVE_LOGIN with a user object', () => {
    const user = {a:'a'}

    const expected = {
      type: 'SAVE_LOGIN',
      user
    }

    const results = actions.saveLogin(user)

    expect(results).toEqual(expected)
  })

  it('should return a type of SIGN_OUT with an empty user object', () => {
    const user = {}

    const expected = {
      type: 'SIGN_OUT',
      user
    }

    const results = actions.signOut(user)

    expect(results).toEqual(expected)
  })

  it('should return a type of TOGGLE_FAVORITE with a object with favorite: false', () => {
    const favorite = {favorite: false}

    const expected = {
      type: 'TOGGLE_FAVORITE',
      favorite
    }

    const results = actions.toggleFavorite(favorite)

    expect(results).toEqual(expected)
  })

  it('should return a type of CHANGE_FAVORITE with an id', () => {
    const id = 3

    const expected = {
      type: 'CHANGE_FAVORITE',
      id
    }

    const results = actions.changeFavorite(id)

    expect(results).toEqual(expected)
  })

  it('should return a type of GRAB_FAVORITES with a favorites array', () => {
    const favorites = [{a:'a'}, {b:'b'}]

    const expected = {
      type: 'GRAB_FAVORITES',
      favorites
    }

    const results = actions.grabFavorites(favorites)

    expect(results).toEqual(expected)
  })
})