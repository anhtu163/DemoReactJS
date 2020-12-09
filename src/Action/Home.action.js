import * as data from '../Constrant/datademo';
import * as constant from '../Constrant/constant';

//get all products
function onClickGetAllProduct(item){
    return data.list;
}

export const getAllProductRequest = (item) => {

    return dispatch => {
        const res = onClickGetAllProduct(item);
        return dispatch(getAllProduct(res));
    }

}

export const getAllProduct = (res) => ({
    type: constant.GET_ALL_PRODUCT,
    data: {
        res
    }
})