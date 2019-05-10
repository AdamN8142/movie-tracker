export const addMovies = (movies) => ({
  type: 'ADD_MOVIES',
  movies
})

export const saveLogin = (user) => ({
  type: 'SAVE_LOGIN',
  user
})

export const signOut = (user) => ({
  type: 'SIGN_OUT',
  user
})

export const addFavorite = (favorite) => ({
  type: 'ADD_FAVORITE',
  favorite
})

export const removeFavorite = (favorite) => ({
  type: 'REMOVE_FAVORITE',
  favorite
})