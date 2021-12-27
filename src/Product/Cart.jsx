import React from "react";
class Cart extends React.Component{
    render(){
        return(
            <div>
                {/* <pre>{JSON.stringify(this.props)}</pre> */}
                <h3>Product_Name:{this.props.Name}</h3>
                <h4>Price:{this.props.Price}</h4>
            </div>
        )
    }
}
export default Cart; 