import * as constant from "../Constrant/contrant";

const initialState = {
    username: '',
    password: '',
    token: '',
    err: '',
    isLogin: false,
};

const SigninReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case constant.SIGN_IN:

            return state;
        default:
            return state;
    }
};

export default SigninReducer;