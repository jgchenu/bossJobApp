import React from "react";
import {
  List,
  InputItem,
  Button,
  WingBlank,
  WhiteSpace,
  Radio
} from "antd-mobile";
import "./index.less";
import Logo from "../../component/logo";
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "genius",
      user: "",
      pwd: "",
      repeatpwd: ""
    };
    this.handleRegister = this.handleRegister.bind(this);
    this.login = this.login.bind(this);
  }
  handleRegister() {
    console.log(this.state);
    this.props.history.push("/register");
  }
  login() {
    console.log(this.props);
    this.props.history.push("/login");
  }
  handleChange(key, val) {
    this.setState({
      [key]: val
    });
  }
  render() {
    const RadioItem = Radio.RadioItem;

    return (
      <div className="register">
        <Logo />
        <h2>注册页</h2>
        <WingBlank>
          <List>
            <InputItem onChange={v => this.handleChange("user", v)}>
              用户：
            </InputItem>
            <WhiteSpace />
            <InputItem type='password' onChange={v => this.handleChange("pwd", v)}>
              密码：
            </InputItem>
            <WhiteSpace />
            <InputItem type='password' onChange={v => this.handleChange("repeatpwd", v)}>
              再次密码：
            </InputItem>
            <WhiteSpace />
            <RadioItem
              checked={this.state.type === "genius"}
              onChange={() => this.handleChange("type", "genius")}
            >
              牛人
            </RadioItem>
            <WhiteSpace />
            <RadioItem
              checked={this.state.type === "boss"}
              onChange={() => this.handleChange("type", "boss")}
            >
              Boss
            </RadioItem>
          </List>
          <WhiteSpace />
          <Button onClick={this.handleRegister} type="primary">
            注册
          </Button>
        </WingBlank>
      </div>
    );
  }
}
export default Register;
