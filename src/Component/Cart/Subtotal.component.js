import React from 'react';
import '../../Style/SubtotalComponent.css'
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Typography from "@material-ui/core/Typography";

export default class Subtotal extends React.Component {

    render() {
        const cartItems = this.props.cartItems;
        let myCart = cartItems ? [...cartItems]: [];
        const sum = myCart.reduce(((sum, item) => sum + item.price * item.count), 0);
        return (
            <div className="subtotal-wrapper">
                <Typography variant="h6"><u>Sub total:</u><strong> {sum} $</strong></Typography>
                <Button
                    onClick={()=>{window.location.href="/checkout"}}
                    size="large"
                    variant="contained"
                    style={{color: 'white', backgroundColor: 'orangered'}}
                    startIcon={<AddShoppingCartIcon/>}>
                    Check out
                </Button>
            </div>
        )
    }
}