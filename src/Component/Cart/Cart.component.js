import React from 'react';
import CartList from "./CartList.component";
import Subtotal from "./Subtotal.component";
import {Card, Typography} from "@material-ui/core";
import "../../Style/Container.style.css";
import '../../Style/Cart/CartComponent.css'

export default class Cart extends React.Component {

    constructor(props) {
        super(props);
        this.total = 0;
    }

    componentDidMount() {
        const st = this.props;
        st.getCartItems();

        if(st.cartItems.length !== 0){
            st.cartItems.map(e =>{
                this.total = this.total + (e.count * e.price);
            })
        }
    }


    render() {
        const st = this.props;
        if(!st.isLogin)
        {
            window.location.href='/signin'
        }
        const numberOfItems = st.cartItems.length;
        return(
            <div className="container">
                <Card className="cart-wrapper">

                    <Typography variant="h5" component="h2">Cart Information: You have {numberOfItems} item(s) in the cart</Typography>
                    <div className="line-divide" />
                    <CartList cartItems={st.cartItems} st={st}/>
                    <Subtotal cartItems={st.cartItems}/>

                </Card>
            </div>
        )
    }
}