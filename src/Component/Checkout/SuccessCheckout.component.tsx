import React from 'react';
import {Card, CardContent, CardHeader, Typography, Link, CardActions, Button} from "@material-ui/core";
import "../../Style/Container.style.scss";
import CheckoutProduct from "./CheckoutProduct.component";
import '../../Style/Checkout/CheckoutComponent.scss';
import MuiAlert from '@material-ui/lab/Alert';
import {SuccessCheckoutProps} from "../../Container/SuccessCheckout.container";

function Alert(props: any) {
    return <MuiAlert style={{width: '100%'}} elevation={6} variant="filled" {...props} />;
}

export default class SuccessCheckout extends React.Component<SuccessCheckoutProps>{

    private total: number;

    constructor(props: SuccessCheckoutProps) {
        super(props);
        this.total = 0;
    }


    render() {
        const st = this.props;
        console.log(st);
        if(!st.isLogin){
            window.location.href="/signin";
        }
        const orderList = st.order.orderItems;
        if (orderList.length !== 0) {
            orderList.forEach((e:any) => {
                this.total = this.total + (e.count * e.price);
            })
        }
        console.log(this.total)
        return(
            <div className="container">
                <Alert severity="success">Your order will be processed as soon as possible !</Alert>
                <div className="checkout-wrapper checkout-grid">
                    <div className="checkout-card">
                        <Card className="sub-checkout-card">
                            <CardHeader
                                title="Products in your order"
                            />
                            <CardContent>
                                <div className="line-divide"/>
                            </CardContent>
                            <CardContent className="checkout-info-wrapper">
                                {orderList && orderList.map((e:any) => (
                                    <CheckoutProduct key={e.id} data={e}/>
                                ))}
                            </CardContent>
                            <CardContent>
                                <Typography variant="h6"><u>Total price:</u> <strong>{this.total} $</strong> </Typography>
                            </CardContent>

                        </Card>
                    </div>
                    <div className="checkout-card">
                        <Card className="sub-checkout-card">
                            <CardHeader
                                title="Detail information for delivery"
                            />
                            <CardContent>
                                <div className="line-divide"/>
                            </CardContent>
                            <CardContent className="checkout-info-wrapper">
                                <span><strong>Owner:</strong> {st.order.deliveryInfo.name}</span>
                            </CardContent>
                            <CardContent className="checkout-info-wrapper">
                                <span><strong>Address:</strong> {st.order.deliveryInfo.address}</span>
                            </CardContent>
                            <CardContent className="checkout-info-wrapper">
                                <span><strong>Phone number:</strong> {st.order.deliveryInfo.phoneNumber}</span>
                            </CardContent>
                            <CardContent className="checkout-info-wrapper">
                                <span><strong>Pay method:</strong> {st.order.deliveryInfo.payMethod === 1 ? 'Cash on delivery' : 'Internet Banking'}</span>
                            </CardContent>
                            <CardContent>
                                <div className="line-divide"/>
                            </CardContent>
                            <CardActions className="checkout-info-wrapper">
                                <strong><Link href="/"><Button variant="contained" color="primary"> Back to home </Button></Link></strong>
                            </CardActions>


                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}