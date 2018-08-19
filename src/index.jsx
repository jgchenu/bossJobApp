import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import "./config";
import Login from "./container/login";
import Register from "./container/register";
import { Provider } from "react-redux";
import reducer from "./reducer";
import AuthRoute from "./component/authroute";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BossInfo from "./container/bossInfo";
import GeniusInfo from './container/geniusInfo'
const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
function Boss() {
  return <h1>Boss</h1>;
}
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <AuthRoute />
        <Switch>
          <Route path="/bossinfo" component={BossInfo} />
          <Route path="/boss" component={Boss} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/geniusinfo" component={GeniusInfo} />
          {/* <Redirect to="/login" /> */}
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
