import React from 'react';
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    FormControl, FormControlLabel,
    FormLabel, Radio,
    RadioGroup,
    TextField
} from "@material-ui/core";
import '../../Style/Checkout/CheckoutComponent.css'
import Button from "@material-ui/core/Button";
import '../../Style/Container.style.css';


export default class Checkout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            paymethod: 'cod'
        }
    }

    onPayMethodChanged = (e) => {
        this.setState({
            paymethod: e.target.value
        },()=>
        console.log(this.state.paymethod));
    }

    render() {
        return(
            <div className="container">
                <div className="checkout-wrapper">
                <Card className="checkout-card">
                    <CardHeader
                        title="Delivery info"
                        subheader="Support cash on delivery"
                    />
                    <CardContent  className="checkout-info-wrapper">
                        <TextField className="checkout-field" required  label="Name"    variant="outlined"/>
                        <TextField className="checkout-field" required  label="Address"   variant="outlined"/>
                        <TextField className="checkout-field" required  label="Phone number"   variant="outlined"/>
                    </CardContent>
                </Card>
                <Card className="checkout-card">
                    <CardHeader
                        title="Select pay method"
                    />
                    <CardContent className="checkout-method">
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Available methods</FormLabel>
                            <RadioGroup aria-label="pay-method" name="pay-method" value={this.state.paymethod} onChange={this.onPayMethodChanged}>
                                <FormControlLabel value="cod" control={<Radio />} label="Cash on delivery" />
                                <FormControlLabel value="ib" control={<Radio />} label="Internet banking" />
                                {/*<FormControlLabel value="disabled" disabled control={<Radio />} label={
                                    <>
                                        <Avatar alt="kidney" src="https://image.flaticon.com/icons/png/512/1453/1453625.png" />
                                    </>
                                } />*/}
                            </RadioGroup>
                        </FormControl>
                    </CardContent>
                    <CardActions id="order-button-wrapper">
                        <Button id="order-button" variant="contained"
                                style={{color: 'white', backgroundColor: 'orangered'}}>Order</Button>
                    </CardActions>
                </Card>
                </div>
            </div>
        )
    }
}