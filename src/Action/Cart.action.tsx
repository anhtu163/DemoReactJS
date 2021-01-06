import * as constant from '../Constant/constant'

//ADD TO CART

function onClickAddProductToCart(product: any) {
    //xu ly event click, nhan du lieu tu nguoi dung, goi api, tra ve response
    //get va set localStorage
    //tra ve cartItems
    //return list
    let cartItems = JSON.parse(localStorage.getItem("cartItems") as string);
    if (cartItems === null) {
        cartItems = [];
    }
    let alreadyExists = false;
    cartItems.forEach((item: any) => {
        if (item.id === product.id) {
            alreadyExists = true;
            item.count++;
        }
    });
    if (!alreadyExists) {
        cartItems.push({...product, count: 1});
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    return cartItems;
}


//duoc goi ben container, day la middleware
//The middleware sits in between the dispatch and reducers,
// which means we can alter our dispatched actions before
// they get to the reducers or execute some code during the dispatch.

export const addToCartRequest = (product: any) => {
    return (dispatch: any) => {
        const list = onClickAddProductToCart(product);
        return dispatch(addToCart(list));
    }
}

//dispatch
export const addToCart = (res: any) => ({
    type: constant.ADD_TO_CART,
    payload: {
        res,
    }
})


//REMOVE FROM CART

function onClickRemoveProductFromCart(index: any) {
    const cartItems = JSON.parse(localStorage.getItem("cartItems") as string);
    cartItems.splice(index, 1);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    return cartItems;
}

export const removeFromCartRequest = (product: any) => {
    return (dispatch: any) => {
        const list = onClickRemoveProductFromCart(product);
        return dispatch(removeFromCart(list));
    }
}


export const removeFromCart = (res: any) => ({
    type: constant.REMOVE_FROM_CART,
    payload: {
        res,
    }
})

//GET CART ITEMS
//props getCartItemsRequest duoc goi, sau khi duoc goi thi goi toi fetchCartItem de lay data
//sau khi co data goi dispatch truyen action kem data vua nhan duoc cho reducer
function fetchCartItems() {
    return JSON.parse(localStorage.getItem("cartItems") as string);
}

export const getCartItemsRequest = () => {
    return (dispatch : any) => {
        const cartItems = fetchCartItems();
        return dispatch(getCartItems(cartItems));
    }
}

export const getCartItems = (res: any) => ({
    type: constant.GET_CART_ITEMS,
    payload: {
        res
    }
});

//CHANGE QUANTITY

function onClickChangeCartItemCount(index: number, count: any) {
    let cartItems = JSON.parse(localStorage.getItem("cartItems") as string);
    cartItems[index].count = count;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    return cartItems;
}

export const changeCartItemCountRequest = (product: any, count: number) => {
    return (dispatch: any) => {
        const list = onClickChangeCartItemCount(product, count);
        return dispatch(changeCartItemCount(list));
    }
}

export const changeCartItemCount = (res: any) => ({
    type: constant.CHANGE_CART_ITEM_COUNT,
    payload: {
        res
    }
});

// ADD PRODUCT TO CART FROM DETAIL

function onClickAddProductToCartFromDetail(product: any, count: number) {

    console.log('product: ' + product);
    console.log('count: '+ count);
    let cartItems = JSON.parse(localStorage.getItem("cartItems") as string);
    if (cartItems === null) {
        cartItems = [];
    }
    let alreadyExists = false;
    cartItems.forEach((item: any) => {
        if (item.id === product.id) {
            alreadyExists = true;
            item.count = item.count + count;
        }
    });
    if (!alreadyExists) {
        cartItems.push({...product, count: count});
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    return cartItems;
}


export const addToCartFromDetailRequest = (product: any, count: number) => {
    return (dispatch: any) => {
        const list = onClickAddProductToCartFromDetail(product, count);
        return dispatch(addToCartFromDetail(list));
    }
}

//dispatch
export const addToCartFromDetail = (res : any) => ({
    type: constant.ADD_TO_CART_FROM_DETAIL,
    payload: {
        res,
    }
})