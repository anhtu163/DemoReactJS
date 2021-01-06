import * as constant from "../Constant/constant";

export type ProductDetailState = {
    dataDetail: any
}

const initialState = {
    dataDetail: {}
};

const ProductDetailReducer = (state = initialState, actions:any) => {
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