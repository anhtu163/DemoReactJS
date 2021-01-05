import {connect, ConnectedProps} from "react-redux"
import Cart from "../Component/Cart/Cart.component";
import {changeCartItemCountRequest, getCartItemsRequest, removeFromCartRequest} from "../Action/Cart.action";
import {IRootState} from "../Reducer/Reducer";
import {ThunkDispatch} from "redux-thunk";
import {compose} from "redux";
import NavMenu from "../Component/NavMenu.component";

const mapStateToProps = (state: IRootState) => {
    return {
        isLogin: state.SignInReducer.isLogin,
        cartItems: state.CartReducer.cartItems
    }
}
const mapDispatchToProps = (dispatch: ThunkDispatch<IRootState, any, any>) => {
    return {
        getCartItems: () => {
            dispatch(getCartItemsRequest())
        },
        removeFromCart: (product: any) => dispatch(removeFromCartRequest(product)),
        changeCartItemCount: (product: any, count: number) => dispatch(changeCartItemCountRequest(product, count))
    }
}

const connector = connect(
    mapStateToProps,
    mapDispatchToProps,
);

type PropsFromRedux = ConnectedProps<typeof connector>;
export type CartProps = PropsFromRedux;

const CartContainer =  compose(connector)(Cart);

export default CartContainer;