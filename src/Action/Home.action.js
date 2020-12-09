import * as data from '../Constrant/datademo';
import * as constant from '../Constrant/constant';

//get all products
function onClickGetAllProduct(){
    return data.list;
}

export const getAllProductRequest = () => {

    return dispatch => {
        const res = onClickGetAllProduct();
        return dispatch(getAllProduct(res));
    }

}

export const getAllProduct = (res) => ({
    type: constant.GET_ALL_PRODUCT,
    data: {
        res
    }
})