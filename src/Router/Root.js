import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import CartContainer from "../Container/Cart.container";
import ProductDetailContainer from "../Container/ProductDetail.container";
import SignInContainer from "../Container/SignIn.container";
import HomeContainer from "../Container/Home.container";
import 'fontsource-roboto';
import NavMenuContainer from "../Container/NavMenu.container";
import Footer from "../Component/Footer.component";
import CheckOutContainer from "../Container/CheckOut.container";

const Root = () => (
    <div>
        <BrowserRouter>
            <NavMenuContainer />
            <Switch>
                <Route path="/checkout">
                    <CheckOutContainer />
                </Route>
                <Route  path="/signin">
                    <SignInContainer />
                </Route>
                <Route  path="/product-detail&id=:id" component={ProductDetailContainer} />
                <Route  path="/cart">
                    <CartContainer />
                </Route>
                <Route  path="/">
                    <HomeContainer />
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    </div>
)



export default Root