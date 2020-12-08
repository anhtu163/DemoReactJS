import * as constant from "../Constrant/contrant";

const initialState = {
    productsList: [],
    pagesList: 5,
};

const HomeReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case constant.SIGN_IN:

            return state;
        default:
            return state;
    }
};

export default HomeReducer;