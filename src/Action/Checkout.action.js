import * as constant from '../Constant/constant';

export const setOrder = (order) => ({
    type: constant.SET_ORDER,
    data: {
        order
    }
})