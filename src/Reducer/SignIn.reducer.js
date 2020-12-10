import * as constant from "../Constant/constant";

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
            const st = {...state};
            try{
                st.username = actions.data.res.username;
                st.password = actions.data.res.password;
                st.isLogin = true;
            }catch (e){
                st.err = 'err';
            }

            return st;
        case constant.SIGN_OUT:
            console.log(initialState);
            return initialState;
        default:
            return state;
    }
};

export default SignInReducer;