import * as constant from '../Constant/constant'

const initialState = {
    cartItems: [],
    numberTotal: 0,
}

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case constant.CHANGE_CART_ITEM_COUNT:
        case constant.ADD_TO_CART:
        case constant.ADD_TO_CART_FROM_DETAIL:
        case constant.REMOVE_FROM_CART:
        case constant.GET_CART_ITEMS:
            const st = {...state};
            try{
                st.cartItems = action.payload.res;
                st.numberTotal = action.payload.res.length;
            }catch(e){
                //
            }
            return st;
        default:
            return state;
    }
};

export default CartReducer;