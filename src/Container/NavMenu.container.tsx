import {connect, ConnectedProps} from "react-redux";
import NavMenu from "../Component/NavMenu.component";
// @ts-ignore
import {withRouter} from 'react-router-dom';
import {signOut} from "../Action/Signin.action";
import {compose} from "redux";
import Home from "../Component/Home/Home.component";
import {ThunkDispatch} from "redux-thunk";
import {IRootState} from "../Reducer/Reducer";

const mapStateToProps = (state: IRootState) =>{
    return{
        isLogin: state.SignInReducer.isLogin,
        numberTotal: state.CartReducer.numberTotal,

    }
}
const mapDispatchToProps = (dispatch: ThunkDispatch<IRootState, any, any>) => {
    return {
        signOut: () => {dispatch(signOut())}
    }
}

const connector = connect (
    mapStateToProps,
    mapDispatchToProps,
);

type PropsFromRedux = ConnectedProps<typeof connector>;
export type NavMenuProps = PropsFromRedux;

const NavMenuContainer =  compose(connector)(NavMenu);

export default  NavMenuContainer;