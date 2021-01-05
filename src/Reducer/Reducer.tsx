import {combineReducers} from "redux";
import SignInReducer, {SignInState} from "./SignIn.reducer";
import HomeReducer, {HomeState} from "./Home.reducer";
// @ts-ignore
import ProductDetailReducer from "./ProductDetail.reducer";
// @ts-ignore
import CartReducer from "./Cart.reducer"
// @ts-ignore
import CheckoutReducer from "./Checkout.reducer";

export interface IRootState {
    SignInReducer: SignInState,
    HomeReducer: HomeState
}


const MyReducer = combineReducers({
    SignInReducer,
    HomeReducer,
    ProductDetailReducer,
    CartReducer,
    CheckoutReducer
});

export default MyReducer;