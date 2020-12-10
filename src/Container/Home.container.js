import { connect } from "react-redux"
import Home from "../Component/Home/Home.component";
import {getAllProductRequest} from "../Action/Home.action";
import {addToCartRequest} from "../Action/Cart.action";

const mapStateToProps = (state) =>{
    return{
        productsList: state.HomeReducer.productsList,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getAllProduct: () => {
            dispatch(getAllProductRequest())
        },
        addToCart: (product) => dispatch(addToCartRequest(product))
    };
}

const HomeContainer = connect (
    mapStateToProps,
    mapDispatchToProps,
)(Home);

export default  HomeContainer;