import { connect } from "react-redux";
import NavMenu from "../Component/NavMenu.component";
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state) =>{
    return{
        isLogin: state.SignInReducer.isLogin,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}

const NavMenuContainer = withRouter(connect (
    mapStateToProps,
    mapDispatchToProps,
)(NavMenu));

export default  NavMenuContainer;