import React from "react";
import logoImg from "./job.png";
import './index.less';
class Logo extends React.Component {
  render() {
    return (
      <div className="logoContainer">
        <img src={logoImg} alt="" />
      </div>
    );
  }
}
export default Logo;
