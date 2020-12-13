import { connect } from "react-redux"
import * as actions from '../Action/Product.action';

import ProductDetail from "../Component/Product/ProductDetail.component";
import {getDetailProductRequest} from "../Action/Product.action";
import {addToCartFromDetailRequest} from "../Action/Cart.action";

const mapStateToProps = (state) =>{
    return{
        dataDetail : state.ProductDetailReducer.dataDetail,
        isLogin: state.SignInReducer.isLogin,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getDetailProduct: (id) => dispatch(getDetailProductRequest(id)),
        addToCartFromDetail: (product, count) => dispatch(addToCartFromDetailRequest(product, count))
    }
}

const ProductDetailContainer = connect (
    mapStateToProps,
    mapDispatchToProps,
)(ProductDetail);

export default  ProductDetailContainer;