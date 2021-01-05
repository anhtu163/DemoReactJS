import {combineReducers} from "redux";
import SignInReducer from "./SignIn.reducer";
// @ts-ignore
import HomeReducer from "./Home.reducer";
// @ts-ignore
import ProductDetailReducer from "./ProductDetail.reducer";
// @ts-ignore
import CartReducer from "./Cart.reducer"
// @ts-ignore
import CheckoutReducer from "./Checkout.reducer";
import {State} from "./SignIn.reducer";

export interface IRootState {
    SignInReducer: State
}


const MyReducer = combineReducers({
    SignInReducer,
    HomeReducer,
    ProductDetailReducer,
    CartReducer,
    CheckoutReducer
});

export default MyReducer;