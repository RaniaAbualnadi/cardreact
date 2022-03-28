import React, { Component } from "react";
class Counter extends React.Component {
  state = {
    count: 0,
    items: ["item1", "item2", "item3"],
  };
  style = {
    fontWeight: "20px",
    margin: "5px",
  };
  //    constructor(){
  //        super();
  //        this.handleIncrement = this.handleIncrement.bind(this);
  //    }
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
    if (this.state.count < 1) {
      this.setState({ count: 0 });
    }
  };
  renderTags() {
    if (this.state.items.length === 0) return <p>There are no items</p>;
    return (
      <li>
        {this.state.items.map((listItem) => (
          <li key={listItem}>{listItem}</li>
        ))}
      </li>
    );
  }
  render() {
    return (
      <div>
        <span style={this.style}>{this.state.count}</span>
        <span>{this.formatCount}</span>
        <button onClick={() => this.handleIncrement()}>Increment</button>
        <button onClick={() => this.handleDecrement()}>Decrement</button>

        {this.renderTags()}
      </div>
    );
  }
  // formatCount(){
  //     const {count} = this.state
  //     return count == 0 ? 'zero' :  count
  // }
}

export default Counter;
