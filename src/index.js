import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import rootReducer from "./reducers/index";

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { loadState, saveState } from "./localStorage";
import throttle from "lodash/throttle";
import "./index.css";

const middleware = [logger, thunk];
const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(...middleware))
);

store.subscribe(
  throttle(() => {
    saveState({
      auth: store.getState().auth,
      plants: store.getState().plants,
    });
  }, 1000)
);

ReactDOM.render(
  <Provider store={store}>
    <App  className="vh-100"/>
  </Provider>,
  document.getElementById("root")
);
