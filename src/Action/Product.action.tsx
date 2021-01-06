import * as data from '../Constant/datademo';
import * as constant from '../Constant/constant';


//get detail product
function onClickGetDetailProduct(id: string){
    return data.list.filter(e => e.id === parseInt(id, 10))[0];
}

export const getDetailProductRequest = (id:any) => {
    return (dispatch:any) => {
        const res = onClickGetDetailProduct(id);
        return dispatch(getDetailProduct(res))
    }
}

export const getDetailProduct = (res:any) => ({
    type: constant.GET_DETAIL_PRODUCT,
    data: {
        res,
    }
})
