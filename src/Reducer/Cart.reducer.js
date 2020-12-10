import * as constraint from '../Constant/constant'

const CartReducer = (state = {
    cartItems: localStorage.getItem("cartItems") || "[]"
}, action) => {
    switch (action.type) {
        case constraint.ADD_TO_CART:
            return {cartItems: action.payload.cartItems};
        case constraint.REMOVE_FROM_CART:
            return {cartItems: action.payload.cartItems};
        default:
            return state;
    }
};

export default CartReducer;