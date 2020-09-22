export function authReducer(state = null, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
    case "CURRENT_USER":
    case "SIGNUP_SUCCESS":
      return action.user;
    default:
      return state;
  }
}
