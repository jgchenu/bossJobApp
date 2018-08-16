import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { counter } from "./reduxs";
import App from "./App";
import { Provider } from "react-redux";

const reduxDevtools = window.devToolsExtension
  ? window.devToolsExtension
  : () => {};
const store = createStore(
  counter,
  compose(
    applyMiddleware(thunk),
    reduxDevtools()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
);
