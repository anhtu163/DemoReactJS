import * as data from '../Constant/datademo';
import * as constant from '../Constant/constant';

//get all products
function onClickGetAllProduct(){
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