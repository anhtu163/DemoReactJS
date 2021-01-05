import {connect, ConnectedProps} from "react-redux"
import Home from "../Component/Home/Home.component";
import {getAllProductRequest} from "../Action/Home.action";
import {addToCartRequest, getCartItemsRequest} from "../Action/Cart.action";
import {compose} from "redux";
import SignIn from "../Component/SignIn.component";
import {ThunkDispatch} from "redux-thunk";
import {IRootState} from "../Reducer/Reducer";

const mapStateToProps = (state: IRootState) =>{
    return{
        productsList: state.HomeReducer.productsList,
        isLogin: state.SignInReducer.isLogin,
    }
}
const mapDispatchToProps = (dispatch: ThunkDispatch<IRootState, any, any>) => {
    return {
        getAllProduct : () => {dispatch(getAllProductRequest())},
        addToCart: (product: any) => {dispatch(addToCartRequest(product))},
        getCartItems: () => {dispatch(getCartItemsRequest())}
    }
}

const connector = connect (
    mapStateToProps,
    mapDispatchToProps,
);

type PropsFromRedux = ConnectedProps<typeof connector>;
export type HomeProps = PropsFromRedux;

const HomeContainer =  compose(connector)(Home);


export default  HomeContainer;