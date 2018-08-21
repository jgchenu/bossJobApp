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
import { connect } from "react-redux";
import { register } from "../../redux/user.redux.js";
import { Redirect } from "react-router-dom";
import imoocForm from "../../component/imoocform";
@connect(
  state => state.user,
  { register }
)

@imoocForm

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleRegister = this.handleRegister.bind(this);
    this.login = this.login.bind(this);
  }
  handleRegister() {
    console.log(this.state);
    // this.props.history.push("/register");
    this.props.register(this.props.state);
  }
  login() {
    console.log(this.props);
    this.props.history.push("/login");
  }
  componentWillMount() {
    this.props.handleChange("type", "genius");
  }
  render() {
    const RadioItem = Radio.RadioItem;

    return (
      <div className="register">
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo />
        <h2>注册页</h2>
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
            <WhiteSpace />
            <InputItem
              type="password"
              onChange={v => this.props.handleChange("repeatpwd", v)}
            >
              再次密码：
            </InputItem>
            <WhiteSpace />
            <RadioItem
              checked={this.state.type === "genius"}
              onChange={() => this.props.handleChange("type", "genius")}
            >
              牛人
            </RadioItem>
            <WhiteSpace />
            <RadioItem
              checked={this.state.type === "boss"}
              onChange={() => this.props.handleChange("type", "boss")}
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
