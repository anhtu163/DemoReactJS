import { connect } from "react-redux"
import Signin from "../Component/Signin.component";
import * as actions from '../Action/Signin.action';
import Home from "../Component/Home/Home.component";

const mapStateToProps = (state) =>{
    return{

    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const HomeContainer = connect (
    mapStateToProps,
    mapDispatchToProps,
)(Home);

export default  HomeContainer;