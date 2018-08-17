import React from "react";
import { List, InputItem, Button, WingBlank, WhiteSpace } from "antd-mobile";
import Logo from "../../component/logo";
class Login extends React.Component {
  constructor(props) {
    super(props);

    this.register = this.register.bind(this);
  }
  register() {
    console.log(this.props);
    this.props.history.push("/register");
  }
  render() {
    return (
      <div>
        <Logo />
        <WingBlank>
          <List>
            <InputItem>用户：</InputItem>
            <WhiteSpace />
            <InputItem>密码：</InputItem>
          </List>
          <WhiteSpace />
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
export default Login;
