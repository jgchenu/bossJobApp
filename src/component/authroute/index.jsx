import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux'
import { loadData } from "./../../redux/user.redux";
import {Toast} from 'antd-mobile'
@connect(
  state=>state.user,
  { loadData}
)
@withRouter
class AuthRoute extends React.Component {
  componentDidMount() {
    const publicList = ["/login", "/register"];
    const pathname = this.props.location.pathname;
    if (publicList.indexOf(pathname) > -1) {
      return null;
    }
    axios.get("/user/info").then(res => {
      console.log(res)
      if (res.data.code === 200) {
        this.props.loadData(res.data.data);
      } else if (res.data.code === 201) {
        Toast.loading('没有登录',4);
        this.props.history.push('/login')
      }
    });
  }
  render() {
    return null;
  }
}
export default AuthRoute;
