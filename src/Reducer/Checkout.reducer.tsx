import * as constant from '../Constant/constant'

export type CheckoutState = {
    order : any
}

const initialState = {
    order: {}
}

const CheckoutReducer = (state = initialState, action: any) => {
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