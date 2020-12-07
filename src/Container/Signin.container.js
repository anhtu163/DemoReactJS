import { connect } from "react-redux"
import Signin from "../Component/Signin.component";
import * as actions from '../Action/Signin.action';

const mapStateToProps = (state) =>{
    return{

    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const SigninContainer = connect (
    mapStateToProps,
    mapDispatchToProps,
)(Signin);

export default  SigninContainer;