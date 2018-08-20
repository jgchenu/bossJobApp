import React from "react";
import { WingBlank, Card, WhiteSpace } from "antd-mobile";
import { connect } from "react-redux";
import { getUserList } from "../../redux/chatuser.redux";
@connect(
  state => state.chatuser,
  { getUserList }
)
class Boss extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentWillMount() {
      this.props.getUserList('genius')
  }
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
export default Boss;
