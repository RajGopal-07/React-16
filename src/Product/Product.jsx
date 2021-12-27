import React from "react";
import Cart from "./Cart"
class Product extends React.Component{
    Product_Name="Mobile";
    Price=30000;
    render(){
        // console.log("First render method")
        return(
            <div>
                <Cart 
                message="Good Morning"
                Name={this.Product_Name}
                Price={this.Price}/>
            </div>
        )
    }
}
export default Product;