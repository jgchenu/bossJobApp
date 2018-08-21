import React from "react";
import UserCard from "../usercard";
import { connect } from "react-redux";
import { getUserList } from "../../redux/chatuser.redux";

@connect(
  state => state.chatuser,
  { getUserList }
)
class Genius extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentWillMount() {
    this.props.getUserList("boss");
  }
  render() {
    return <UserCard userList={this.props.userList} />;
  }
}
export default Genius;
