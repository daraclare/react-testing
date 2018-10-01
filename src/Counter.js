import React, { Component } from "react";

export default class Counter extends Component {
  state = { count: 0 };

  render() {
    const { count } = this.state;
    return <button>{count}</button>;
  }
}
