export function plantsReducer(state = [], action) {
  switch (action.type) {
    case "GET_PLANTS":
      return action.plants;
    default:
      return state;
  }
}
