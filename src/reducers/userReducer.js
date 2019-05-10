export const userReducer = (state={}, action) => {
  switch(action.type) {
    case 'SAVE_LOGIN': 
      return { id: action.user.data.id, name: action.user.data.name }
    case 'SIGN_OUT':
      return {}
    case 'ADD_FAVORITE':
      if(state.favorites && !state.favorites.includes(action.favorite)) {
        return {...state, favorites: [...state.favorites, action.favorite]}
      } else if(!state.favorites) {
        return {...state, favorites: [action.favorite]}
      } else {
        return state
      }
    // case 'REMOVE_FAVORITE':
    //   return {...state, favorites: state.favorites.filter((favorite) => {
    //     return !action
    //   })}
    default:
       return state
  }
}