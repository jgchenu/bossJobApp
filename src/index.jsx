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
import { Router, Route, Switch } from "react-router-dom";
import BossInfo from "./container/bossInfo";
import GeniusInfo from './container/geniusInfo'
import DashBoard from './component/dashboard'
import './index.less'
import history from './router/history'
const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <AuthRoute />
        <Switch>
          <Route path="/bossinfo" component={BossInfo} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/geniusinfo" component={GeniusInfo} />
          <Route component={DashBoard} />

          {/* <Redirect to="/login" /> */}
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
