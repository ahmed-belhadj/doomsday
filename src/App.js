import React, { Component } from "react";
import ListForm from "./ListForm";
import List from "./List";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      singleItem: ""
    };
  }
  updateSingleItem = event => this.setState({ singleItem: event.target.value });
  addSingleItem = event => {
    event.preventDefault();
    const list = this.state.list.slice();
    list.push({
      task: this.state.singleItem,
      completed: false,
      id: Date.now()
    });
    this.setState({ list, singleItem: "" });
  };
  render() {
    return (
      <div className="App">
        <ListForm
          value={this.state.singleItem}
          updateSingleItem={this.updateSingleItem}
          addSingleItem={this.addSingleItem}
        />
        <List list={this.state.list} />
      </div>
    );
  }
}

export default App;
