import Items from "./item";
import ProductionItem from "./ProductionItem";
function App() {
  return (
    <div className="App">
      <Items />
    </div>
  );
}

export default App;


------
import React from "react";
import Items from "./item";

class ProductionItem extends React.Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
    if (this.state.count < 1) {
      this.setState({ count: 0 });
    }
  };
  render() {
    return (
      <div>
        <h1> {this.props.type}</h1>
        <h2> {this.props.color}</h2>
        <h3> {this.props.price}</h3>
        <div style={{ display: "inline-block", marginLeft: "20em" }}>
          <span style={{ marginRight: "2em" }}>
            <button onClick={() => this.handleIncrement()}>+</button>
          </span>
          <span style={{ marginRight: "2em" }}>{this.state.count}</span>
          <span style={{ marginRight: "2em" }}>
            <button onClick={() => this.handleDecrement()}>-</button>
          </span>
        </div>
      </div>
    );
  }
}

export default ProductionItem;
---
import React, { Component } from 'react'
import ProductionItem from "./ProductionItem"


class Items extends React.Component {
    render() { 
        let Clothes =[
           {
               id:1,
               Type: 'Blouse',
               color: 'Blue',
               price: '20JD'

           },
           {
            id:2,
            Type: 'Blouse',
            color: 'Blue',
            price: '20JD'

        },
        {
            id:2,
            Type: 'Blouse',
            color: 'Blue',
            price: '20JD'

        }


        ];
        const element=Clothes.map((element)=> {
            return <ProductionItem 
            src={element.src}
            type={element.type}
            color={element.color}
            price={element.price}
            />
        })
        return <div>
            <React.Fragment>
                {element}
            </React.Fragment>
        </div>;
    }
}
 
export default Items;



----
