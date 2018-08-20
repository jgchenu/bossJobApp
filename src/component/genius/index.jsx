import React from "react";
import axios from "axios";
import { WingBlank, Card } from "antd-mobile";

class Genius extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentWillMount() {
    axios.get("/user/list?type=boss").then(res => {
      if (res.data.code === 200) {
        this.setState({
          data: res.data.data
        });
        console.log(res)
      }
    });
  }
render() {
    const Header = Card.Header;
    const Body = Card.Body;
    return (
      <div>
        <WingBlank>
          {this.state.data.map(
            v =>
              v.avatar ? (
                <Card key={v.id}> 
                  <Header
                    title={v.user}
                    thumb={require(`../img/${v.avatar}.png`)}
                    extra={<span>{v.title}</span>}
                  />
                  <Body>
                      {v.desc}
                  </Body>
                </Card>
              ) : null
          )}
        </WingBlank>
      </div>
    );
  }
}
export default Genius;
