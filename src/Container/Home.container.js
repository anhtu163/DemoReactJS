import { connect } from "react-redux"
import Signin from "../Component/SignIn.component";
import * as actions from '../Action/Signin.action';
import Home from "../Component/Home/Home.component";
import {getAllProductRequest} from "../Action/Home.action";

const mapStateToProps = (state) =>{
    return{
        productsList: state.HomeReducer.productsList,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getAllProduct : () => {dispatch(getAllProductRequest())},
    }
}

const HomeContainer = connect (
    mapStateToProps,
    mapDispatchToProps,
)(Home);

export default  HomeContainer;