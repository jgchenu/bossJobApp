import React from "react";
import App from "./App";
import { Route, Link, Redirect, Switch } from "react-router-dom";
import { logout } from "./Auth.redux";
import { connect } from "react-redux";
function Erying() {
  return <h2>二营</h2>;
}
function Qibinglian() {
  return <h2>骑兵连</h2>;
}
@connect(
  state => state.auth,
  { logout }
)
class Dashboard extends React.Component {
  render() {
    const redirectToLogin = <Redirect to="/login" />;
    const app = (
      <div>
        <h1>独立团</h1>
        {this.props.isAuth?<button onClick={this.props.logout}>注销</button>:null}
        <ul>
          <li>
            <Link to="/dashboard">一营</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/dashboard/erying">二营</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/dashboard/qibinglian">骑兵连</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/dashboard" component={App} />
          <Route path="/dashboard/erying" component={Erying} />
          <Route path="/dashboard/qibinglian" component={Qibinglian} />
          <Redirect to="/dashboard" />
        </Switch>
      </div>
    );
    return this.props.isAuth ? app : redirectToLogin;
  }
}

export default Dashboard;
