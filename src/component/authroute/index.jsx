import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
@withRouter
class AuthRoute extends React.Component {
  componentDidMount() {
    const publicList = ["/login", "/register"];
    const pathname = this.props.location.pathname;
    if (pathname in publicList) {
      return null;
    }
    axios.get("/user/info").then(res => {
      if (res.status === 200) {
        console.log(res);
        if (res.data.code === 200) {
        } else {
          this.props.history.push("/boss");
        }
      }
    });
  }
  render() {
    return <p>AuthRoute</p>;
  }
}
export default AuthRoute;
