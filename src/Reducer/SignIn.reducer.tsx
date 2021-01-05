// @ts-ignore
import * as constant from "../Constant/constant";

export type SignInState = {
    username: string,
    password: string,
    token: string,
    err: string,
    isLogin: boolean,
}

const initialState : SignInState = {
    username: '',
    password: '',
    token: '',
    err: '',
    isLogin: false,
};

const SignInReducer = (state:SignInState = initialState, actions: { type: any; data: { res: { username: string; password: string; }; }; }): SignInState => {
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