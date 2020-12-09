import React from 'react';
import {Card, Icon} from "@material-ui/core";
import '../../Style/SubtotalComponent.css'
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
export default class Subtotal extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="subtotal-wrapper">
                <div id="subtotal-text">Sub total: $1231.33</div>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddShoppingCartIcon />}>
                    Checkout
                </Button>
            </div>
        )
    }
}