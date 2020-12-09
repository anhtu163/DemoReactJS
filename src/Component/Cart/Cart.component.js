import React from 'react';
import CartList from "./CartList.component";
import Subtotal from "./Subtotal.component";
import {Card} from "@material-ui/core";
import "../../Style/Container.style.css";
import '../../Style/Cart/CartComponent.css'

export default class Cart extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="container">
                <Card className="cart-wrapper">
                    <CartList/>
                    <Subtotal/>
                </Card>
            </div>
        )
    }
}