// @ts-ignore
import {connect, ConnectedProps} from "react-redux"
import SignIn from "../Component/SignIn.component";
import {signInRequest} from "../Action/Signin.action";
import {IRootState} from "../Reducer/Reducer";
import {ThunkDispatch} from "redux-thunk";
import {compose} from "redux";

const mapStateToProps = (state : IRootState) =>{
    return{
        username: state.SignInReducer.username,
        password: state.SignInReducer.password,
        err: state.SignInReducer.err,
        isLogin: state.SignInReducer.isLogin,
    }
}
const mapDispatchToProps = (dispatch: ThunkDispatch<IRootState, any, any>) => {
    return {
        signIn: (username: string, password: string) => {dispatch(signInRequest(username, password))}
    }
}
const connector = connect (
    mapStateToProps,
    mapDispatchToProps,
);
type PropsFromRedux = ConnectedProps<typeof connector>

export type SignInProps = PropsFromRedux;

const SignInContainer =  compose(connector)(SignIn);

export default SignInContainer;