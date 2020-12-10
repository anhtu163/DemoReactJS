import React from 'react';
import CartItem from "./CartItem.component";
import ProductCard from "../Home/ProductCard.component";

export default function CartList (props) {


        return (
            <div>
                <CartItem/>
                { props.cartItems ? props.cartItems.map(data => <CartItem key={data.id} st={props.st} data={data}/>) : []}
            </div>
        )
}