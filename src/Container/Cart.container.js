import { connect } from "react-redux"
import Cart from "../Component/Cart/Cart.component";
import {getCartItemsRequest} from "../Action/Cart.action";

const mapStateToProps = (state) =>{
    return{
        isLogin: state.SignInReducer.isLogin,
        cartItems: state.CartReducer.cartItems
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCartItems: ()=> {dispatch(getCartItemsRequest())}
    }
}

const CartContainer = connect (
    mapStateToProps,
    mapDispatchToProps,
)(Cart);

export default CartContainer;