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
import {Alert} from "@material-ui/lab";


export default class Checkout extends React.Component {

    constructor(props) {
        super(props);
        this.total = 0;
        this.state = {
            name: '',
            address: '',
            phoneNumber: '',
            payMethod: '1',
            errors: []
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
        const {
            name,
            address,
            phoneNumber
        } = this.state;
        let hasError = this.validate(name, address, phoneNumber);
        console.log(hasError);
        if (hasError.isNameError || hasError.isAddressError || hasError.isPhoneNumberError) {
            this.setState({errors: hasError});
            return;
        }
        // const order = {deliveryInfo: {...this.state}, orderItems: {...this.props.cartItems}};
        window.location.href = "/success-checkout";
    }

    validate = (name, address, phoneNumber) => {
        const errors = {};
        if (name.length === 0) {
            errors.isNameError = true;
        }
        if (address.length === 0) {
            errors.isAddressError = true;
        }
        if (phoneNumber.length === 0 || !this.isVietnamesePhoneNumber(phoneNumber)) {
            errors.isPhoneNumberError = true;
        }
        return errors;
    }

    isVietnamesePhoneNumber = (number) => {
        return /(03|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
    }

    render() {
        const st = this.props;

        if (!st.isLogin) {
            window.location.href = '/signin'
        }
        const {
            name, address, phoneNumber, errors
        } = this.state;
        return (
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
                                    <CheckoutProduct key={e.id} data={e}/>
                                ))}
                            </CardContent>
                            <CardContent>
                                <div className="line-divide"/>
                            </CardContent>
                            <CardContent>
                                <Typography variant="h5">Total: {this.total} $ </Typography>
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
                                    {errors.isNameError && < Alert severity="error">Name must be not empty!</Alert>}
                                    <TextField value={name} onChange={(e) => {
                                        this.onChangeName(e);
                                        errors.isNameError = false;
                                    }}
                                               className="checkout-field" required
                                               label="Name" variant="outlined"/>
                                    {errors.isAddressError &&
                                    <Alert severity="error">Address must be not empty!</Alert>}
                                    <TextField value={address} onChange={(e) => {
                                        this.onChangeAddress(e);
                                        errors.isAddressError = false;
                                    }}
                                               className="checkout-field" required label="Address" variant="outlined"/>
                                    {errors.isPhoneNumberError &&
                                    <Alert severity="error">Phone number is not valid!</Alert>}
                                    <TextField value={phoneNumber} onChange={(e) => {
                                        this.onChangePhoneNumber(e);
                                        errors.isPhoneNumberError = false;
                                    }}
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
                                                    value={this.state.payMethod}

                                                    onChange={this.onPayMethodChanged}>
                                            <FormControlLabel value="1" control={<Radio/>} label="Cash on delivery"/>
                                            <FormControlLabel value="2" control={<Radio/>} label="Internet banking"/>
                                        </RadioGroup>
                                    </FormControl>
                                </CardContent>
                                <CardActions id="order-button-wrapper">
                                    <Button onClick={this.handleOrder} id="order-button" variant="contained"
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