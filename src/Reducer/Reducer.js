import {combineReducers} from "redux";
import SignInReducer from "./SignIn.reducer";
import HomeReducer from "./Home.reducer";
import ProductDetailReducer from "./ProductDetail.reducer";

const MyReducer = combineReducers({
    SignInReducer,
    HomeReducer,
    ProductDetailReducer,
});

export default MyReducer;