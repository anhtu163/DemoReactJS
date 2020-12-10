import { connect } from "react-redux";
import NavMenu from "../Component/NavMenu.component";
import {withRouter} from 'react-router-dom';
import {signOut} from "../Action/Signin.action";

const mapStateToProps = (state) =>{
    return{
        isLogin: state.SignInReducer.isLogin,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => {dispatch(signOut())}
    }
}

const NavMenuContainer = withRouter(connect (
    mapStateToProps,
    mapDispatchToProps,
)(NavMenu));

export default  NavMenuContainer;