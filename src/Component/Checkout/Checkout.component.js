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
    TextField, Typography
} from "@material-ui/core";
import '../../Style/Checkout/CheckoutComponent.css'
import Button from "@material-ui/core/Button";
import '../../Style/Container.style.css';
import CheckoutProduct from "./CheckoutProduct.component";


export default class Checkout extends React.Component {

    constructor(props) {
        super(props);
        this.total = 0;
        this.state = {
            payMethod: 'cod'
        }
    }

    onPayMethodChanged = (e) => {
        this.setState({
            payMethod: e.target.value
        },()=>
        console.log(this.state.payMethod));
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
        const sum = st.cartItems.reduce(((sum, item) => sum + item.price * item.count), 0);

        console.log(this.total);
        return(
            <div className="container">
                <div className="checkout-wrapper checkout-grid">

                    <div className="checkout-card">
                        <Card className="sub-checkout-card">
                            <CardHeader
                                title="Products in cart"
                                subheader="Your products"
                            />
                            <CardContent>
                                <div className="line-divide"/>
                            </CardContent>
                            <CardContent className="checkout-info-wrapper">
                                {st.cartItems && st.cartItems.map(e => (
                                    <CheckoutProduct data={e}/>
                                ))}
                            </CardContent>
                            <CardContent>
                                <div className="line-divide"/>
                            </CardContent>
                            <CardContent>
                                <Typography variant="h5">Total: {sum} $ </Typography>
                            </CardContent>

                        </Card>
                    </div>
                    <div className="">
                        <div className="checkout-card">
                            <Card className="sub-checkout-card">
                                <CardHeader
                                    title="Delivery info"
                                    subheader="Support cash on delivery"
                                />
                                <CardContent>
                                    <div className="line-divide"/>
                                </CardContent>
                                <CardContent className="checkout-info-wrapper">

                                    <TextField className="checkout-field" required label="Name" variant="outlined"/>
                                    <TextField className="checkout-field" required label="Address" variant="outlined"/>
                                    <TextField className="checkout-field" required label="Phone number"
                                               variant="outlined"/>
                                </CardContent>
                            </Card>
                        </div>


                        <div className="checkout-card">
                            <Card className="sub-checkout-card">
                                <CardHeader
                                    title="Select pay method"
                                    subheader="Please choose one"
                                />
                                <CardContent>
                                    <div className="line-divide"/>
                                </CardContent>
                                <CardContent className="checkout-method">
                                    <FormControl component="fieldset">
                                        <FormLabel component="legend">Available methods</FormLabel>
                                        <RadioGroup aria-label="pay-method" name="pay-method"
                                                    value={this.state.payMethod}
                                                    onChange={this.onPayMethodChanged}>
                                            <FormControlLabel value="cod" control={<Radio/>} label="Cash on delivery"/>
                                            <FormControlLabel value="ib" control={<Radio/>} label="Internet banking"/>
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
                </div>
            </div>
        )
    }
}