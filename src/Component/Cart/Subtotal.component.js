import React from 'react';
import '../../Style/SubtotalComponent.css'
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

export default function Subtotal (props) {


        return(
            <div className="subtotal-wrapper">
           <Typography variant="h5" ><strong><u>Sub total:</u> {sum} vnđ</strong></Typography>

                <Button
                    onClick={() => {window.location.href='/checkout'}}
                    size="large"
                    variant="contained"
                    style={{color: 'white', backgroundColor: 'orangered'}}
                    startIcon={<AddShoppingCartIcon/>}>
                    Check out
                </Button>
            </div>
        )
}