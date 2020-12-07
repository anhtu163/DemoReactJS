import {Route, BrowserRouter , Switch} from 'react-router-dom';
import SigninContainer from "../Container/Signin.container";
import HomeContainer from "../Container/Home.container";

const Root = () => (
    <BrowserRouter>
        <Switch>
            <Route  path="/signin">
                <SigninContainer />
            </Route>
            <Route  path="/">
                <HomeContainer />
            </Route>

        </Switch>
    </BrowserRouter>
)



export default Root