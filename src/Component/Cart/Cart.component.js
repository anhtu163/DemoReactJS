import React from 'react';
import CartList from "./CartList.component";
import Subtotal from "./Subtotal.component";
import {Card, Typography} from "@material-ui/core";
import "../../Style/Container.style.css";
import '../../Style/Cart/CartComponent.css'

export default class Cart extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const st = this.props;
        st.getCartItems();
    }


    render() {
        const st = this.props;
        if(!st.isLogin)
        {
            window.location.href='/signin'
        }
        return(
            <div className="container">
                <Card className="cart-wrapper">

                    <Typography variant="h5" component="h2">Cart Information:</Typography>
                    <div className="line-divide" />
                    <CartList cartItems={st.cartItems} st={st}/>
                    <Subtotal/>
                </Card>
            </div>
        )
    }
}