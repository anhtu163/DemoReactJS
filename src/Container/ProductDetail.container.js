import { connect } from "react-redux"
import * as actions from '../Action/Product.action';

import ProductDetail from "../Component/Product/ProductDetail.component";
import {getDetailProductRequest} from "../Action/Product.action";

const mapStateToProps = (state) =>{
    return{
        dataDetail : state.ProductDetailReducer.dataDetail,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getDetailProduct: (id) => dispatch(getDetailProductRequest(id)),
    }
}

const ProductDetailContainer = connect (
    mapStateToProps,
    mapDispatchToProps,
)(ProductDetail);

export default  ProductDetailContainer;