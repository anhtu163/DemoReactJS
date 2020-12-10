import '../Constant/constant'
import {ADD_TO_CART, REMOVE_FROM_CART} from "../Constant/constant";

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
export const addToCart = (list) => ({
    type: ADD_TO_CART,
    payload: list
})


//REMOVE FROM CART

export const removeFromCart = (list) => ({
    type: REMOVE_FROM_CART,
    payload: list
})

