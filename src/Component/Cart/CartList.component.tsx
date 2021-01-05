import React from 'react';
import CartItem from "./CartItem.component";

export default function CartList (props: any) {


        return (
            <div>
                { props.cartItems ? props.cartItems.map((data: any, index: number) => <CartItem key={data.id} st={props.st} data={data} index={index}/>) : []}
            </div>
        )
}