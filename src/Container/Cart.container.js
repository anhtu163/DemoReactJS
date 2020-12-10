import {connect} from "react-redux"
import Cart from "../Component/Cart/Cart.component";
import {getCartItemsRequest, removeFromCartRequest} from "../Action/Cart.action";

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
        removeFromCart: (product) => dispatch(removeFromCartRequest(product))
    }
}

const CartContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Cart);

export default CartContainer;