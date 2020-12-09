import {Route, BrowserRouter , Switch} from 'react-router-dom';
import CartContainer from "../Container/Cart.container";
import ProductDetailContainer from "../Container/ProductDetail.container";
import HomeContainer from "../Container/Home.container";

const Root = () => (
    <BrowserRouter>
        <Switch>

            <Route  path="/detail">
                <ProductDetailContainer />
            </Route>
            <Route  path="/cart">
                <CartContainer />
            </Route>
            <Route  path="/">
                <HomeContainer />
            </Route>
        </Switch>
    </BrowserRouter>
)



export default Root