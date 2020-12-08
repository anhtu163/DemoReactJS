import { connect } from "react-redux"
import Signin from "../Component/SignIn.component";
import * as actions from '../Action/Signin.action';
import Home from "../Component/Home/Home.component";
import ProductDetail from "../Component/Product/ProductDetail.component";

const mapStateToProps = (state) =>{
    return{

    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const ProductDetailContainer = connect (
    mapStateToProps,
    mapDispatchToProps,
)(ProductDetail);

export default  ProductDetailContainer;