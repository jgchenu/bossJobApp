import React from "react";
import { connect } from "react-redux";
import { login, getUserData } from "./Auth.redux";
import { Redirect } from "react-router-dom";
@connect(
  state => state.auth,
  { login, getUserData }
)
class Auth extends React.Component {
  state = {};
  componentDidMount() {
    this.props.getUserData();
    // axios
    //   .get("/data")
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }
  render() {
    return (
      <div>
        {this.props.isAuth ? <Redirect to="/dashboard" /> : null}
        <h2>你没有权限，需要登录才能看</h2>
        <button onClick={this.props.login}>登录</button>
      </div>
    );
  }
}

export default Auth;
