import {combineReducers} from "redux";
import SignInReducer from "./SignIn.reducer";
import HomeReducer from "./Home.reducer";
import ProductDetailReducer from "./ProductDetail.reducer";
import CartReducer from "./Cart.reducer"
const MyReducer = combineReducers({
    SignInReducer,
    HomeReducer,
    ProductDetailReducer,
    CartReducer
});

export default MyReducer;