export const userReducer = (state={}, action) => {
  switch(action.type) {
    case 'SAVE_LOGIN': 
      return { id: action.user.data.id, name: action.user.data.name }
    case 'SIGN_OUT':
      return {}
    default:
       return state
  }
}