import * as data from '../Constrant/datademo';
import * as constant from '../Constrant/constant';


//get detail product
function onClickGetDetailProduct(id){
    const res = data.list.filter(e => e.id === parseInt(id, 10))[0];
    return res;
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
