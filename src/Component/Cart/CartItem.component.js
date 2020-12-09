import React from 'react';
import productImg from "../../Image/product.PNG";
import '../../Style/Cart/CartItemComponent.css'
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from "@material-ui/core/IconButton";


export default class CartItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="cart-item-wrapper">
                <div>
                    <img className="cart-image" src="https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1546928942586-21WV3P2ST7XICD6MYYQV/ke17ZwdGBToddI8pDm48kBtpJ0h6oTA_T7DonTC8zFdZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIWkiAYz5ghgEgSGJuDQ4e1ZKXpRdhEMT7SgthRpD0vyIKMshLAGzx4R3EDFOm1kBS/49787637_2590738740953034_2806852189832609792_n.jpg" alt="product"/>
                </div>
                <div className="name-price">
                    <h3>9-layer medical mask</h3>
                    <p>1 x $950.00</p>
                </div>
                <div className="cart-delete-button">
                    <IconButton
                            variant="contained"
                            size="medium"
                            style={{color: 'white', backgroundColor: 'orangered', alignItems: 'center'}}>
                        <DeleteIcon fontSize="small"/>
                    </IconButton>
                </div>
            </div>
        )
    }
}