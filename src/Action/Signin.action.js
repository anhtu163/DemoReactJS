import * as data from '../Constant/datademo';
import * as constant from '../Constant/constant';

function onClickSignIn(username, password){
    const res = data.user.filter(e => e.username === username && e.password === password)[0];
    return res;
}

export const signInRequest = (username, password) => {
    return dispatch => {
        const res = onClickSignIn(username, password);

        return dispatch(signIn(username, password, res));
    }
}

export const signIn = (username, password, res) => ({
    type: constant.SIGN_IN,
    data: {
        res
    }
})

//log out
export const signOut = () => ({
    type: constant.SIGN_OUT
})