// export const categoryReducer = (state= 'movies', action) => {
//   switch(action.type) {
//     case 'SET_CATEGORY':
//       return action.value
//     default:
//       return state
//   }
// }

export const favoritesReducer = (state=[], action) => {
  switch(action.type) {
    case 'GRAB_FAVORITES':
      return action.favorites.map((fav)=> {
        // console.log(fav)
        return {...fav, favorite: true}
      })
    default:
      return state
  }
}
