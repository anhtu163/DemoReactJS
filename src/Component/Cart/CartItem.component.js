import React from 'react';
import productImg from "../../Image/product.PNG";
import '../../Style/CartItemComponent.css'
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';


export default class CartItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="cart-item-wrapper">
                <div id="product-left">
                    <img className="cart-image" src={productImg} alt="product"/>
                    <div id="name-price">
                        <h3>9-layer medical mask</h3>
                        <p>1 x $950.00</p>
                    </div>
                </div>
                <div>
                    <Button id="cart-delete-button"
                            variant="contained"
                            color="secondary"
                            startIcon={<DeleteIcon/>}/>
                </div>
            </div>
        )
    }
}