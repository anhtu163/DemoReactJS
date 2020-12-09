import React from 'react';
import CartItem from "./CartItem.component";

export default class CartList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
               <CartItem/>
               <CartItem/>
               <CartItem/>
            </div>
        )
    }
}