import React from "react";
// import Items from "./item";
import "./style.css";

class ProductionItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  // state = {
  //   count: 0,
  // };

  handleIncrement = () => {
    //this is to invoke the function
    this.props.onChange();
    this.setState({ count: this.state.count + 1 });
  };
  // handleDecrement = () => {
  //   this.props.onChangeMinus();
  //   this.setState({ count: this.state.count - 1 });
  //   if (this.state.count < 1) {
  //     this.setState({ count: 0 });
  //   }
  // };
  handleDecrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
      this.props.onChangeMinus();
    }
  };
  render() {
    return (
      <div className="card-container">
        {/* <h1> Total numbs : {this.handleIncrement}</h1> */}
        <img className="img" alt="dress" src={this.props.src} />
        <div className="info-content">
          <h2 className="color"> {this.props.color}</h2>
          <h4 className="price"> {this.props.price}</h4>
        </div>
        <div className="button-container">
          <span style={{ marginRight: "2em" }}>
            <button onClick={this.handleIncrement}>+</button>
          </span>
          <span style={{ marginRight: "2em" }}>{this.state.count}</span>
          <span style={{ marginRight: "2em" }}>
            {/* i can do it in this way */}
            <button onClick={this.handleDecrement}>-</button>
          </span>
        </div>
      </div>
    );
  }
}

export default ProductionItem;
