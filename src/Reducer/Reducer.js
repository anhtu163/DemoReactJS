import {combineReducers} from "redux";
import SignInReducer from "./SignIn.reducer";
import HomeReducer from "./Home.reducer";

const MyReducer = combineReducers({
    SignInReducer,
    HomeReducer,
});

export default MyReducer;