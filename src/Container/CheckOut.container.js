import {connect} from "react-redux"
import {getCartItemsRequest} from "../Action/Cart.action";
import Checkout from "../Component/Checkout/Checkout.component";
import {setOrder} from "../Action/Checkout.action";

const mapStateToProps = (state) => {
    return {
        isLogin: state.SignInReducer.isLogin,
        cartItems: state.CartReducer.cartItems
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCartItems: () => {
            dispatch(getCartItemsRequest())
        },
        setOrder: (order) => {
            dispatch(setOrder(order))
        }
    }
}

const CheckOutContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Checkout);

export default CheckOutContainer;