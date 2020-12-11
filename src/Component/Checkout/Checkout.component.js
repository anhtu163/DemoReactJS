import React from 'react';
import {
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
            name: '',
            address: '',
            phoneNumber: '',
            payMethod: '1'
        }
    }

    componentDidMount() {
        const st = this.props;
        st.getCartItems();
        if (st.cartItems.length !== 0) {
            st.cartItems.forEach(e => {
                this.total = this.total + (e.count * e.price);
            })
        }
    }

    onPayMethodChanged = (e) => {
        this.setState({
            payMethod: e.target.value
        });
    }

    onChangeName = (e) => {
        this.setState({name: e.target.value});
    }

    onChangeAddress = (e) => {
        this.setState({address: e.target.value});
    }

    onChangePhoneNumber = (e) => {
        this.setState({phoneNumber: e.target.value});
    }

    handleOrder = () => {
        const order = {deliveryInfo: {...this.state}, orderItems: {...this.props.cartItems}};
        console.log(order);
    }

    render() {
        const st = this.props;
        if (!st.isLogin) {
            window.location.href = '/signin'
        }
        const {name, address, phoneNumber, payMethod} = this.state;
        return (
            <div className="container">
                <div className="checkout-wrapper checkout-grid">

                    <div className="checkout-card">
                        <Card className="sub-checkout-card">
                            <CardHeader
                                title="Products in cart"
                                subheader="Your choice"
                            />
                            <CardContent>
                                <div className="line-divide"/>
                            </CardContent>
                            <CardContent className="checkout-info-wrapper">
                                {st.cartItems && st.cartItems.map(e => (
                                    <CheckoutProduct key={e.id} data={e}/>
                                ))}
                            </CardContent>
                            <CardContent>
                                <div className="line-divide"/>
                            </CardContent>
                            <CardContent>
                                <Typography variant="h5">Total: {this.total} vnđ </Typography>
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

                                    <TextField value={name} onChange={(e) => this.onChangeName(e)}
                                               className="checkout-field" required
                                               label="Name" variant="outlined"/>
                                    <TextField value={address} onChange={(e) => this.onChangeAddress(e)}
                                               className="checkout-field" required label="Address" variant="outlined"/>
                                    <TextField value={phoneNumber} onChange={(e) => this.onChangePhoneNumber(e)}
                                               className="checkout-field" required label="Phone number"
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
                                                    value={payMethod}
                                                    onChange={this.onPayMethodChanged}>
                                            <FormControlLabel value="1" control={<Radio/>} label="Cash on delivery"/>
                                            <FormControlLabel value="2" control={<Radio/>} label="Internet banking"/>
                                        </RadioGroup>
                                    </FormControl>
                                </CardContent>
                                <CardActions id="order-button-wrapper">
                                    <Button onClick={() => this.handleOrder()} id="order-button" variant="contained"
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