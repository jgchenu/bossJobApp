import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux'
import { getUserInfo} from './../../redux/user.redux'
@connect(
  state=>state.user,
  { getUserInfo}
)
@withRouter
class AuthRoute extends React.Component {
  componentDidMount() {
    const publicList = ["/login", "/register"];
    const pathname = this.props.location.pathname;
    if (publicList.indexOf(pathname) > -1) {
      return null;
    }
    this.props.getUserInfo()
  }
  render() {
    return null;
  }
}
export default AuthRoute;
