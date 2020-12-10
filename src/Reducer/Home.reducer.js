import * as constant from "../Constant/constant";

const initialState = {
    productsList: [],
    pagesList: 5,
};

const HomeReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case constant.GET_ALL_PRODUCT:
            const st = {...state};
            st.productsList = actions.data.res;
            return st;
        default:
            return state;
    }
};

export default HomeReducer;