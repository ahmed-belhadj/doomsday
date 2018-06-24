import React, { Component } from "react";
import List from "./List";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
  }
  render() {
    return (
      <div className="App">
        <List list={this.state.list} />{" "}
      </div>
    );
  }
}

export default App;
