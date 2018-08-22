import React from "react";
import { List, InputItem } from "antd-mobile";
// import { connect } from "react-redux";
// import { getUserList } from "../../redux/chatuser.redux";
// import UserCard from "../usercard";
// @connect(
//     state => state.chatuser,
//     { getUserList }
// )
import io from "socket.io-client";
let socket = io("ws://localhost:8080");
socket.on("recvmsg", function(data) {
  console.log(data);
});
class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  handleSubmit() {
    socket.emit("sendmsg", { text: this.state.text });
    this.setState({
      text: ""
    });
  }
  render() {
    return (
      <div>
        <List className="stickFooter">
          <InputItem
            placeholder="请输入"
            value={this.state.text}
            onChange={v => this.setState({ text: v })}
            extra={<span onClick={() => this.handleSubmit()}>发送</span>}
          />
        </List>
        Chat with user :{this.props.match.params.user}
      </div>
    );
  }
}
export default Chat;
