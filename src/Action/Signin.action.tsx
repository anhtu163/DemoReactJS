import * as data from '../Constant/datademo';
import * as constant from '../Constant/constant';

function onClickSignIn(username: any, password: any){
    const res = data.user.filter(e => e.username === username && e.password === password)[0];
    return res;
}

export const signInRequest = (username: string, password: string) => {
    return (dispatch:  any) => {
        const res = onClickSignIn(username, password);

        return dispatch(signIn(username, password, res));
    }
}

export const signIn = (username: string, password: string, res: any) => ({
    type: constant.SIGN_IN,
    data: {
        res
    }
})

//log out
export const signOut = () => ({
    type: constant.SIGN_OUT
})