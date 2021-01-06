import {connect, ConnectedProps} from "react-redux"
import ProductDetail from "../Component/Product/ProductDetail.component";
import {getDetailProductRequest} from "../Action/Product.action";
import {addToCartFromDetailRequest} from "../Action/Cart.action";
import {compose} from "redux";
import {IRootState} from "../Reducer/Reducer";
import {ThunkDispatch} from "redux-thunk";

const mapStateToProps = (state: IRootState) =>{
    return{
        dataDetail : state.ProductDetailReducer.dataDetail,
        isLogin: state.SignInReducer.isLogin,
    }
}
const mapDispatchToProps = (dispatch: ThunkDispatch<IRootState, any, any>) => {
    return {
        getDetailProduct: (id:any) => dispatch(getDetailProductRequest(id)),
        addToCartFromDetail: (product:any, count:any) => dispatch(addToCartFromDetailRequest(product, count))
    }
}

const connector = connect(
    mapStateToProps,
    mapDispatchToProps,
);

type PropsFromRedux = ConnectedProps<typeof connector>;
export type ProductDetailProps = PropsFromRedux;

const ProductDetailContainer =  compose(connector)(ProductDetail);

export default  ProductDetailContainer;