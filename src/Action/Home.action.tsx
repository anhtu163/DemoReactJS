import * as data from '../Constant/datademo';
import * as constant from '../Constant/constant';

//get all products
function onClickGetAllProduct(){
    return data.list;
}

export const getAllProductRequest = () => {

    return (dispatch: any) => {
        const res = onClickGetAllProduct();
        return dispatch(getAllProduct(res));
    }

}

export const getAllProduct = (res: any) => ({
    type: constant.GET_ALL_PRODUCT,
    data: {
        res
    }
})