import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import "./config";
import Login from './container/login'
import Register from './container/register'
import { Provider } from "react-redux";
import reducers from "./reducers";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
