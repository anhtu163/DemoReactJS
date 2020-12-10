import * as data from '../Constant/datademo';
import * as constant from '../Constant/constant';


//get detail product
function onClickGetDetailProduct(id){
    return data.list.filter(e => e.id === parseInt(id, 10))[0];
}

export const getDetailProductRequest = (id) => {
    return dispatch => {
        const res = onClickGetDetailProduct(id);
        return dispatch(getDetailProduct(res))
    }
}

export const getDetailProduct = (res) => ({
    type: constant.GET_DETAIL_PRODUCT,
    data: {
        res,
    }
})
