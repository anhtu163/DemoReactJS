import * as constant from '../Constant/constant'

const initialState = {
    order : {}
}

const CheckoutReducer = (state = initialState, action) => {
    switch (action.type) {

        case constant.SET_ORDER:
            const st = {...state};
            st.order = action.data.order
            return st;
        default:
            return state;
    }
};

export default CheckoutReducer;