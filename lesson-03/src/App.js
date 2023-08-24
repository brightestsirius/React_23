import React, { Component } from 'react'
// import Table from './components/Table/Table'
// import User from './components/User/User';
import List from './components/List/List';

export default class App extends Component {

  state = {
    animals: [
      { type: `turtle`, icon: `🐢`},
      { type: `octopus`, icon: `🐙`},
      { type: `octopus`, icon: `🐙`},
      { type: `fish`, icon: `🐠`},
      { type: `flamingo`, icon: `🦩`},
      { type: `penguin`, icon: `🐧`},
    ],
    showList: true
  }

  componentDidMount(){
    console.log(`in App componentDidMount`);

    setTimeout(() => {
      this.setState({
        showList: false
      })
    }, 1500);
  }

  render() {
    let {animals, showList} = this.state;

    return (
      <>
        {/* <Table list={animals} /> */}
        {/* <User /> */}
        {showList && <List />}
      </>
    )
  }
}