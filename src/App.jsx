import React from "react";
class App extends React.Component {
  state = {};
  render() {
    const store = this.props.store;
    const current = store.getState();
    const addGun=this.props.addGun;
    const removeGun=this.props.removeGun;
    return <div>
        <div>
          现在有激光枪了 {current}
          个了
        </div>
        <button onClick={() => store.dispatch(addGun())}>申请武器</button>
        <button onClick={() => store.dispatch(removeGun())}>
          上交武器
        </button>
      </div>;
  }
}

export default App;
