import { connect } from "react-redux"
import SignIn from "../Component/SignIn.component";
import {signInRequest} from "../Action/Signin.action";

const mapStateToProps = (state) =>{
    return{
        username: state.SignInReducer.username,
        password: state.SignInReducer.password,
        err: state.SignInReducer.err,
        isLogin: state.SignInReducer.isLogin,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (username, password) => {dispatch(signInRequest(username, password))}
    }
}

const SignInContainer = connect (
    mapStateToProps,
    mapDispatchToProps,
)(SignIn);

export default  SignInContainer;