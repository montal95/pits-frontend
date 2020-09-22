import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { plantsReducer } from "./plants";
const appReducer = combineReducers({
  auth: authReducer,
  plants: plantsReducer,
});
const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === "LOGOUT_SUCCESS") {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
