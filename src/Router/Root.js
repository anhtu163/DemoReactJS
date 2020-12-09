import {Route, BrowserRouter , Switch} from 'react-router-dom';
import CartContainer from "../Container/Cart.container";
import ProductDetailContainer from "../Container/ProductDetail.container";
import NavMenu from "../Component/NavMenu.component";
import 'fontsource-roboto';

const Root = () => (
    <div>
        <NavMenu />
        <BrowserRouter>
            <Switch>
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