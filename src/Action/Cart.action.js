import * as constant from '../Constant/constant'

//ADD TO CART

function onClickAddProductToCart(product) {
    //xu ly event click, nhan du lieu tu nguoi dung, goi api, tra ve response
    //get va set localStorage
    //tra ve cartItems
    //return list
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (cartItems === null) {
        cartItems = [];
    }
    let alreadyExists = false;
    cartItems.forEach((item) => {
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

export const addToCartRequest = (product) => {
    return dispatch => {
        const list = onClickAddProductToCart(product);
        return dispatch(addToCart(list));
    }
}

//dispatch
export const addToCart = (res) => ({
    type: constant.ADD_TO_CART,
    payload: {
        res,
    }
})


//REMOVE FROM CART

function onClickRemoveProductFromCart(index) {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    cartItems.splice(index, 1);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    return cartItems;
}

export const removeFromCartRequest = (product) => {
    return dispatch => {
        const list = onClickRemoveProductFromCart(product);
        return dispatch(removeFromCart(list));
    }
}


export const removeFromCart = (res) => ({
    type: constant.REMOVE_FROM_CART,
    payload: {
        res,
    }
})

//GET CART ITEMS
//props getCartItemsRequest duoc goi, sau khi duoc goi thi goi toi fetchCartItem de lay data
//sau khi co data goi dispatch truyen action kem data vua nhan duoc cho reducer
function fetchCartItems() {
    return JSON.parse(localStorage.getItem("cartItems"));
}

export const getCartItemsRequest = () => {
    return dispatch => {
        const cartItems = fetchCartItems();
        return dispatch(getCartItems(cartItems));
    }
}

export const getCartItems = res => ({
    type: constant.GET_CART_ITEMS,
    payload: {
        res
    }
});

//CHANGE QUANTITY

function onClickChangeCartItemCount(index, count) {
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));
    cartItems[index].count = count;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    return cartItems;
}

export const changeCartItemCountRequest = (product, count) => {
    return dispatch => {
        const list = onClickChangeCartItemCount(product, count);
        return dispatch(changeCartItemCount(list));
    }
}

export const changeCartItemCount = res => ({
    type: constant.CHANGE_CART_ITEM_COUNT,
    payload: {
        res
    }
});