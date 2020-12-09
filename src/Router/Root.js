import {Route, BrowserRouter , Switch} from 'react-router-dom';
import CartContainer from "../Container/Cart.container";
import ProductDetailContainer from "../Container/ProductDetail.container";
import SignInContainer from "../Container/SignIn.container";
import HomeContainer from "../Container/Home.container";
import NavMenu from "../Component/NavMenu.component";
import 'fontsource-roboto';
import SignInContainer from "../Container/SignIn.container";
import HomeContainer from "../Container/Home.container";
import Checkout from "../Component/Checkout/Checkout.component";
import Component from "../Component/Component";

const Root = () => (
    <div>
        <NavMenu />
        <BrowserRouter>
            <Switch>

                <Route path="/checkout">
                    <Checkout />
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
        </BrowserRouter>
    </div>
)



export default Root