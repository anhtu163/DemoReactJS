// @ts-ignore
import * as constant from "../Constant/constant";

export type State = {
    username: string,
    password: string,
    token: string,
    err: string,
    isLogin: boolean,
}

const initialState : State = {
    username: '',
    password: '',
    token: '',
    err: '',
    isLogin: false,
};

const SignInReducer = (state:State = initialState, actions: { type: any; data: { res: { username: string; password: string; }; }; }): State => {
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