import React from "react";
import PropTypes from "prop-types";
import { WingBlank, Card, WhiteSpace } from "antd-mobile";

class UserCard extends React.Component {
  static propTypes = {
    userList: PropTypes.array.isRequired
  };
  render() {
    const Header = Card.Header;
    const Body = Card.Body;
    return (
      <div>
        <WingBlank>
          {this.props.userList.map(
            v =>
              v.avatar ? (
                <div key={v.id}>
                  <Card>
                    <Header
                      title={v.user}
                      thumb={require(`../img/${v.avatar}.png`)}
                      extra={<span>{v.title}</span>}
                    />
                    <Body>
                      {v.desc.split("\n").map(v => (
                        <div key={v}>{v}</div>
                      ))}
                    </Body>
                  </Card>
                  <WhiteSpace />
                </div>
              ) : null
          )}
        </WingBlank>
      </div>
    );
  }
}
export default UserCard;
