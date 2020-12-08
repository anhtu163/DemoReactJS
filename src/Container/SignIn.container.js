import { connect } from "react-redux"
import Signin from "../Component/SignIn.component";
import * as actions from '../Action/Signin.action';

const mapStateToProps = (state) =>{
    return{

    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const SignInContainer = connect (
    mapStateToProps,
    mapDispatchToProps,
)(Signin);

export default  SignInContainer;