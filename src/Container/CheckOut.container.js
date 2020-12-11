import {connect} from "react-redux"
import {getCartItemsRequest} from "../Action/Cart.action";
import Checkout from "../Component/Checkout/Checkout.component";

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
    }
}

const CheckOutContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Checkout);

export default CheckOutContainer;