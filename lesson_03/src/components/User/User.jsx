import React, { Component } from 'react'

export default class User extends Component {

  componentDidMount(){

    // this.setState(prevState => ({key: prevState.value}))

    setTimeout(() => {
      this.setState(prevState => ({
        user: {...prevState.user, name: `Taras`}
      }))
    }, 1000);

    setTimeout(() => {
      this.setState(prevState => ({
        user: {...prevState.user, surname: `Sheva`}
      }))
    }, 1000);

    setTimeout(() => {
      this.setState(prevState => ({
        user: {...prevState.user, city: `Kyiv`}
      }))
    }, 1000);

  }

  state = {
    user: {
      name: `Vasyl`,
      surname: `Stus`,
      city: `Kharkiv`
    }
  }

  render() {
    const {user} = this.state;

    return Object.keys(user).length
      ? <ul>
        {Object.values(user).map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      : null;
  }
}
