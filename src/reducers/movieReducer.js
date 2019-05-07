export const movieReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MOVIES':
      return [...state, title: movie.title]
    default:
      return state
  }
}