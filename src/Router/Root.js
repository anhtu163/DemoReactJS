import {Route, BrowserRouter , Switch} from 'react-router-dom';
import SigninContainer from "../Container/Signin.container";
import App from "../App";

const Root = () => (
    <BrowserRouter>
        <Switch>
            <Route  path="/signin">
                <SigninContainer />
            </Route>
            <Route  path="/">
                <App />
            </Route>

        </Switch>
    </BrowserRouter>
)



export default Root