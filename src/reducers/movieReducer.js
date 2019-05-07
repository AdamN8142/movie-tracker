export const moviesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MOVIES':
      return [...state, {title: action.title}]
    default:
      return state
  }
}