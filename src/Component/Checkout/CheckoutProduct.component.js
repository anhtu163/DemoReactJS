import React from 'react';

import '../../Style/Checkout/CheckoutProduct.style.css';
import '../../Style/Container.style.css';
import {Card} from "@material-ui/core";


export default function CheckoutProduct(props) {

    const data = props.data;

    return(
            <Card className="product-checkout-card">
                <div>
                    <img className="thumb-nail" src={data.image}/>
                </div>
                <div>
                    <p>{data.name}</p>
                    <p>{data.count} x {data.price} vnđ</p>
                </div>
            </Card>
        )
}