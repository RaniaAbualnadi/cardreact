
import React, { Component } from 'react';
import ProductionItem from "./ProductionItem";


class Items extends Component {
    constructor(props){
        super(props) 
        this.state= {total: 0}
    }
    handelChange = () => {
        this.setState({total: this.state.total + 1})
    }
    handelChangeMinus = () => {
        if (this.state.total> 0) {
              this.setState({total: this.state.total - 1});
          
          }
    }

    render() { 
        let Clothes =[
           {
               id:1,
               color: 'Black',
               price: '20JD',
               src: 'dress1.jpg',},

           {
            id:2,
          
            color: 'Pink',
            price: '50JD',
            src: 'dress2.jpg'

        },
        {
            id:3,
            color: 'White',
            price: '20JD',
            src: 'dresss.jpeg'

        }


        ];
        const element=Clothes.map((element)=> {
            
            return <ProductionItem 
            src={element.src}
            key={element.id}
            color={element.color}
            price={element.price}
            onChange= {this.handelChange}
            onChangeMinus= {this.handelChangeMinus}
            //this is to send function we dont use ()
            />
        })
        return <div>
            <React.Fragment>
                <h1>Your number of items are: {this.state.total}</h1>
                {element}
            </React.Fragment>
        </div>;
    }
}
 
export default Items;