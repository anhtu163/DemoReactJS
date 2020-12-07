import {Route, BrowserRouter , Switch} from 'react-router-dom';
import SigninContainer from "../Container/Signin.container";

const Root = () => (
    <BrowserRouter>
        <Switch>
            <Route  path="/signin">
                <SigninContainer />
            </Route>

        </Switch>
    </BrowserRouter>
)



export default Root