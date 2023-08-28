import React, { Component } from "react";

export default class List extends Component {
  state = {
    list: [`cat`, ` dog`, `lion`],
  };

  componentDidMount() {
    console.log(`in List componentDidMount`);

    this.setState({
      removeItem: setInterval(() => {
        console.log(`in interval`);

        this.setState(
          (prevState) => ({
            list: prevState.list.slice(0, -1),
          }),
          () => {
            !this.state.list.length && clearInterval(this.state.removeItem);
          }
        );
      }, 1000),
    });
  }

  componentDidUpdate() {
    console.log(`in List componentDidUpdate`);
  }

  componentWillUnmount() {
    console.log(`in List componentWillUnmount`);
    clearInterval(this.state.removeItem);
  }

  render() {
    let { list = [] } = this.state;

    return list.length ? (
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ) : null;
  }
}
