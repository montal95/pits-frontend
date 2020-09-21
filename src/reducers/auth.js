export function authReducer(state = {}, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
    case "CURRENT_USER":
    case "SIGNUP_SUCCESS":
      return action.user;
    case "LOGOUT_SUCCESS":
      return {};
    default:
      return state;
  }
}
