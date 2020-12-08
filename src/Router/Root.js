import {Route, BrowserRouter , Switch} from 'react-router-dom';
import SignInContainer from "../Container/SignIn.container";
import HomeContainer from "../Container/Home.container";
import ProductDetailContainer from "../Container/ProductDetail.container";
import NavMenu from "../Component/NavMenu.component";

const Root = () => (
    <div>
        <NavMenu />
        <BrowserRouter>
            <Switch>
                <Route  path="/signin">
                    <SignInContainer />
                </Route>
                <Route  path="/product-detail&id=:id">
                    <ProductDetailContainer />
                </Route>
                <Route  path="/">
                    <HomeContainer />
                </Route>


            </Switch>
        </BrowserRouter>
    </div>

)



export default Root