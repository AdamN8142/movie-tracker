export const moviesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MOVIES':
      return action.movies.map((movie)=> {
        return {...movie, favorite: false}
      })
    case 'TOGGLE_FAVORITE':
      console.log(action.favorite)
      return state.map((movie)=> {
        if(movie.id == action.favorite) {
          console.log(movie.id)
          return {...movie, movie_id:movie.id, favorite:!movie.favorite }
        } else {
          return movie
        }
      }) 
    default:
      return state  
  }
}