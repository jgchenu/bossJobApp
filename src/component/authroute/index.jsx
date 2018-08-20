import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { loadData } from "./../../redux/user.redux";
@connect(
  state => state.user,
  { loadData }
)
@withRouter
class AuthRoute extends React.Component {
  componentDidMount() {
    const publicList = ["/login", "/register"];
    const pathname = this.props.location.pathname;
    if (publicList.indexOf(pathname) > -1) {
      return null;
    }
    this.props.loadData();
  }
  render() {
    return null;
  }
}
export default AuthRoute;
