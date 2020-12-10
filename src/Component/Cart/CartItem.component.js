import React from 'react';
import productImg from "../../Image/product.PNG";
import '../../Style/Cart/CartItemComponent.css'
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from "@material-ui/core/IconButton";


export default function CartItem (props) {
    const data = props.data;
    return (
            <div>
                {data &&
                    <div>
                        <div className="cart-item-wrapper">
                            <div>
                                <img className="cart-image"
                                     src={data.image}
                                     alt="product"/>
                            </div>
                            <div className="name-price">
                                <h3>{data.name}</h3>
                                <p>{data.count} x {data.price}</p>
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
                        <div className="line-divide"/>
                    </div>
                }
            </div>
        )
}