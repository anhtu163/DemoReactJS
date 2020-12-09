import * as constant from "../Constrant/constant";

const initialState = {
    username: '',
    password: '',
    token: '',
    err: '',
    isLogin: false,
};

const SignInReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case constant.SIGN_IN:

            return state;
        default:
            return state;
    }
};

export default SignInReducer;