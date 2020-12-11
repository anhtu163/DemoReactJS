import React from 'react';
import '../../Style/Cart/CartItemComponent.css'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from "@material-ui/core/IconButton";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {Button} from "@material-ui/core";


export default function CartItem(props) {
    const data = props.data;
    const st = props.st;

    const remove = (index) => {
        st.removeFromCart(index);
    }

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
                        <ButtonGroup color="primary" aria-label="outlined primary button group">
                            <Button onClick={() => {
                                if (data.count > 1) {
                                    let count = data.count - 1;
                                    console.log(count);
                                    st.changeCartItemCount(props.index, count);
                                }
                            }
                            }><h2>-</h2></Button>
                            <Button>{data.count}</Button>
                            <Button onClick={() => {
                                let count = data.count + 1;
                                st.changeCartItemCount(props.index, count);
                            }}><h2>+</h2></Button>
                        </ButtonGroup>
                        <p>${data.price*data.count}</p>
                    </div>
                    <div className="cart-delete-button">
                        <IconButton onClick={() => remove(props.index)}
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