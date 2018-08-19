import React from "react";
import {
  NavBar,
  InputItem,
  List,
  WingBlank,
  TextareaItem,
  Button
} from "antd-mobile";
import AvatarSelector from "../../component/avatarSelector";
import { update } from "../../redux/user.redux";
import { connect } from "react-redux";
@connect(
  state => state.user,
  { update }
)
class BossInfo extends React.Component {
  handleChange(key, val) {
    this.setState({
      [key]: val
    });
  }
  render() {
    return (
      <div>
        <NavBar mode="dark" onLeftClick={() => console.log("onLeftClick")}>
          BOSS信息完善页
        </NavBar>
        <AvatarSelector
          selectAvatar={imageName => {
            this.setState({
              avatar: imageName
            });
          }}
        />
        <List>
          <WingBlank>
            <InputItem onChange={v => this.handleChange("title", v)}>
              招聘岗位
            </InputItem>
            <InputItem onChange={v => this.handleChange("company", v)}>
              公司名称
            </InputItem>
            <InputItem onChange={v => this.handleChange("money", v)}>
              职业薪资
            </InputItem>
            <TextareaItem
              onChange={v => this.handleChange("desc", v)}
              row={3}
              autoHeight
              title="职业要求"
            />
          </WingBlank>
          <Button type="primary">保存</Button>
        </List>
      </div>
    );
  }
}
export default BossInfo;
