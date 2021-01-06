import {connect, ConnectedProps} from "react-redux"
import {getCartItemsRequest} from "../Action/Cart.action";
import Checkout from "../Component/Checkout/Checkout.component";
import {setOrder} from "../Action/Checkout.action";
import {IRootState} from "../Reducer/Reducer";
import {ThunkDispatch} from "redux-thunk";
import {compose} from "redux";
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
        setOrder: (order: any) => {
            dispatch(setOrder(order))
        }
    }
}

const connector = connect(
    mapStateToProps,
    mapDispatchToProps,
);

type PropsFromRedux = ConnectedProps<typeof connector>;
export type CheckOutProps = PropsFromRedux;

const CheckOutContainer = compose(connector)(Checkout)

export default CheckOutContainer;