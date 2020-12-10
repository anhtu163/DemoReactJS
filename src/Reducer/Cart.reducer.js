import * as constant from '../Constant/constant'

const initialState = {
    cartItems: [],
}

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case constant.ADD_TO_CART:
        case constant.REMOVE_FROM_CART:
        case constant.GET_CART_ITEMS:
            const st = {...state};
            try{
                st.cartItems = action.payload.res;
            }catch(e){
                //
            }
            return st;
        default:
            return state;
    }
};

export default CartReducer;