import React from 'react';
import CartList from "./CartList.component";
import Subtotal from "./Subtotal.component";
import {Card} from "@material-ui/core";
import '../../Style/CartComponent.css'
import OrderSuccess from "./OrderSuccess.component";

export default class Cart extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="container">
                <Card className="cart-wrapper">
                    <CartList/>
                    {/*checkout success*/}
                    <OrderSuccess/>
                    <Subtotal/>
                </Card>
            </div>
        )
    }
}