import React, { Component } from "react";
import store from "../store";

export default class DisplayNumber extends Component {
  constructor(props) {
    super(props);
    store.subscribe(() => {
      this.setState({
        number: store.getState().number,
      });
    });
  }
  state = {
    number: store.getState().number,
  };
  render() {
    return (
      <div>
        <h1>Display Number</h1>
        <input type="text" value={this.state.number} readOnly />
      </div>
    );
  }
}
