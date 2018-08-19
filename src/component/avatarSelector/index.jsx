import React from "react";
import { Grid, List } from "antd-mobile";

class AvatarSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const avatarList = "boy,bull,chick,crab,girl,hedgehog,hippopotamus,koala,lemur,man,pig,tiger,whale,woman,zebra"
      .split(",")
      .map(v => ({
        icon: require(`../img/${v}.png`),
        text: v
      }));
    const gridHeader = this.state.icon ? (
      <div>
        <span>已选择头像:&nbsp;</span>
        <img src={this.state.icon} alt="icon" style={{ width: 20 }} />
      </div>
    ) : (
      "请选择头像"
    );
    return (
      <div>
        <List renderHeader={() => gridHeader}>
          <Grid
            data={avatarList}
            columnNum={5}
            onClick={e => {
              this.setState(e);
              this.props.selectAvatar(e.text);
            }}
          />
        </List>
      </div>
    );
  }
}
export default AvatarSelector;
