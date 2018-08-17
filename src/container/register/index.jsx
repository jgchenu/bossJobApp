import React from "react";
import { List, InputItem, Button, WingBlank, WhiteSpace } from "antd-mobile";
import Logo from "../../component/logo";
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.register = this.register.bind(this);
  }
  register() {
    console.log(this.props);
    this.props.history.push("/");
  }
  render() {
    return (
      <div>
        <Logo />
        <h2>注册页</h2>
        <WingBlank>
          <Button type="primary">登录</Button>
          <WhiteSpace />
          <Button onClick={this.register} type="primary">
            注册
          </Button>
        </WingBlank>
      </div>
    );
  }
}
export default Register;
