import * as constant from "../Constrant/constant";

const initialState = {
    dataDetail: {}
};

const ProductDetailReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case constant.GET_DETAIL_PRODUCT:
            const st = {...state};
            st.dataDetail = actions.data.res;
            return st;
        default:
            return state;
    }
};

export default ProductDetailReducer;