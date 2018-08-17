import React from "react";
import { connect } from "react-redux";
import { addGun, removeGun, addGunAsync } from "./index.redux.js";


@connect(
  state => ({
    num: state.counter
  }),
  {addGun,removeGun,addGunAsync}
)
class App extends React.Component {
  state = {};
  render() {
    const num = this.props.num;
    const addGun = this.props.addGun;
    const removeGun = this.props.removeGun;
    const addGunAsync = this.props.addGunAsync;
    return (
      <div>
        <div>
          现在有激光枪了 {num}
          个了
        </div>
        <button onClick={addGun}>申请武器</button>
        <button onClick={removeGun}>上交武器</button>
        <button onClick={addGunAsync}>2s后申请武器</button>
      </div>
    );
  }
}

export default App;
