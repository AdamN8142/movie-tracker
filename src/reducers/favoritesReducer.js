export const favoritesReducer = (state=[], action) => {
  switch(action.type) {
    case 'GRAB_FAVORITES':
      return action.favorites.map((fav)=> {
        return {...fav, favorite: true}
      })
    default:
      return state
  }
}
