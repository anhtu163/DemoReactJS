import * as constant from "../Constant/constant";

export type HomeState = {
    productsList: any[],
    pagesList: number,
}

const initialState: HomeState = {
    productsList: [],
    pagesList: 5,
};

const HomeReducer = (state = initialState, actions: any): HomeState => {
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