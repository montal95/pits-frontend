import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import rootReducer from "./reducers/index";

import { createStore } from "redux";

import { loadState, saveState } from "./localStorage";
import throttle from "lodash/throttle";

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
    <App />
  </Provider>,
  document.getElementById("root")
);
