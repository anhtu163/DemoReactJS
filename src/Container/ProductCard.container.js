import { connect } from "react-redux"
import ProductCard from "../Component/Home/ProductCard.component";
import {getDetailProductRequest} from "../Action/Product.action";

const mapStateToProps = (state) =>{
    return{
        productsList: state.HomeReducer.productsList,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getAllProduct : () => {dispatch(getDetailProductRequest())},
    }
}

const ProductCardContainer = connect (
    mapStateToProps,
    mapDispatchToProps,
)(ProductCard);

export default  ProductCardContainer;