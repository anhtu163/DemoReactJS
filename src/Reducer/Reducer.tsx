import {combineReducers} from "redux";
import SignInReducer, {SignInState} from "./SignIn.reducer";
import HomeReducer, {HomeState} from "./Home.reducer";
// @ts-ignore
import ProductDetailReducer, {ProductDetailState} from "./ProductDetail.reducer";
// @ts-ignore
import CartReducer, {CartState} from "./Cart.reducer"
// @ts-ignore
import CheckoutReducer, {CheckoutState} from "./Checkout.reducer";

export interface IRootState {
    SignInReducer: SignInState,
    HomeReducer: HomeState,
    CartReducer: CartState,
    CheckoutReducer: CheckoutState,
    ProductDetailReducer: ProductDetailState

}


const MyReducer = combineReducers({
    SignInReducer,
    HomeReducer,
    ProductDetailReducer,
    CartReducer,
    CheckoutReducer
});

export default MyReducer;