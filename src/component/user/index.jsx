import React from "react";
import { Result, List, WhiteSpace, Modal } from "antd-mobile";
import { connect } from "react-redux";
import browserCookie from "browser-cookies";
import { logoutSubmit } from "../../redux/user.redux";
import {Redirect} from 'react-router-dom'
@connect(
  state => state.user,
  { logoutSubmit }
)
class User extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout() {
    const alert = Modal.alert;
    alert("注销", "确认退出登录吗？", [
      {
        text: "取消",
        onPress: () => {
          console.log("cancel");
        }
      },
      {
        text: "确认",
        onPress: () => {
          browserCookie.erase("user");
          this.props.logoutSubmit();
        }
      }
    ]);
  }
  render() {
    const Item = List.Item;
    const Brief = Item.Brief;
    return this.props.user ? (
     
      <div>
         
        <Result
          img={
            <img
              src={require(`../img/${this.props.avatar}.png`)}
              width={50}
              alt="icon"
            />
          }
          title={this.props.user}
        />
        <List renderHeader={() => "简介"}>
          <Item>
            {this.props.title}
            {this.props.desc.split("\n").map(v => (
              <Brief key={v}>{v}</Brief>
            ))}
            {this.props.money ? (
              <Brief>
                薪资:
                {this.props.money}
              </Brief>
            ) : null}
          </Item>
        </List>
        <WhiteSpace />
        <List>
          <Item onClick={this.logout}>退出登录</Item>
        </List>
      </div>
    ) :<Redirect to={this.props.redirectTo}></Redirect>;
  }
}
export default User;
