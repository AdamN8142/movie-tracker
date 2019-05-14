export const moviesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MOVIES':
      return action.movies.map((movie)=> {
        return {...movie, favorite: false}
      })
    case 'TOGGLE_FAVORITE':
      return state.map((movie)=> {
        action.favorite.forEach((fav) => {
          if(movie.id === fav.id) {
            movie.favorite = !movie.favorite
          } 
        })
          return {...movie}
        }) 
    case 'CHANGE_FAVORITE':
        let favMovie = state.find(movie => action.id === movie.id)
        favMovie.favorite = !favMovie.favorite
        return [...state]
    default:
      return state  
  }
}