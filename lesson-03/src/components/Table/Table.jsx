import React, { Component } from "react";
import "./style.sass";
import { getRandomIntInclusive } from "./../../functions/random";

export default class Table extends Component {
  state = Object.assign(
    {
      borderWidth: 0,
    },
    this.props
  );

  componentDidMount() {
    const activateItems = setInterval(() => {
      let unActiveItems = this.state.list.filter((item) => !item.active),
        randomIndex = getRandomIntInclusive(0, unActiveItems.length - 1), // 1
        randomObj = unActiveItems[randomIndex]; // { type: `flamingo`, icon: `🦩`}

      this.setState(
        {
          list: this.state.list.map((item) => {
            if (item === randomObj) item.active = true;
            return item;
          }),
        },
        () => {
          let unActiveItems = this.state.list.filter((item) => !item.active);
          if (!unActiveItems.length) {
            clearInterval(activateItems);
            this.setState({
              borderWidth: 20,
            });
          }

          if (unActiveItems.length === Math.floor(this.state.list.length / 2)) {
            this.setState({
              borderWidth: 10,
            });
          }
        }
      );
    }, 1000);
  }

  render() {
    let { list = [], borderWidth } = this.state;

    return list.length ? (
      <table style={{ borderWidth }}>
        <tbody>
          {list.map((item, index) => (
            <tr key={index} className={item.active && `item--active`}>
              {Object.keys(item)
                .filter((k) => k !== `active`)
                .map((k, i) => (
                  <td key={i}>{item[k]}</td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    ) : null;
  }
}
