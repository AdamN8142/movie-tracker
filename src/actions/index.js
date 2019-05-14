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

export const toggleFavorite = (favorite) => ({
  type: 'TOGGLE_FAVORITE',
  favorite
})

export const changeFavorite = (id) => ({
  type: 'CHANGE_FAVORITE',
  id
})

export const setCategory = (category) => ({
  type: 'SET_CATEGORY',
  category 
})

export const grabFavorites = (favorites) => ({
  type: 'GRAB_FAVORITES',
  favorites
})