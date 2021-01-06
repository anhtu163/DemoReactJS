import * as constant from '../Constant/constant';

export const setOrder = (order: any) => ({
    type: constant.SET_ORDER,
    data: {
        order
    }
})