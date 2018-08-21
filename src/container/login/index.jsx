import React from "react";
import { List, InputItem, Button, WingBlank, WhiteSpace } from "antd-mobile";
import Logo from "../../component/logo";
import { connect } from "react-redux";
import { login } from "../../redux/user.redux";
import { Redirect } from "react-router-dom";
import "./index.less";
import imoocForm from "../../component/imoocform";

@connect(
  state => state.user,
  { login }
)
@imoocForm  
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.register = this.register.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    this.props.login(this.props.state);
  }
  register() {
    this.props.history.push("/register");
  }
  render() {
    return (
      <div className="login">
        {this.props.redirectTo && this.props.redirectTo !== "/login" ? (
          <Redirect to={this.props.redirectTo} />
        ) : null}
        <Logo />
        <WingBlank>
          <List>
            <WhiteSpace />
            {this.props.msg ? (
              <p className="errorMsg">{this.props.msg}</p>
            ) : null}
            <InputItem onChange={v => this.props.handleChange("user", v)}>
              用户：
            </InputItem>
            <WhiteSpace />
            <InputItem
              type="password"
              onChange={v => this.props.handleChange("pwd", v)}
            >
              密码：
            </InputItem>
          </List>
          <WhiteSpace />
          <Button type="primary" onClick={this.handleLogin}>
            登录
          </Button>
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
