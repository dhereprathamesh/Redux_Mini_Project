const ADD_TO_CART = 'ADD_TO_CART';
const ADD_TO_CART_SAGA = 'ADD_TO_CART_SAGA';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const REMOVE_FROM_CART_SAGA = 'REMOVE_FROM_CART_SAGA';
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

//Action Creators
const add_to_cart = (product) => ({ type: ADD_TO_CART, payload: product });
const add_to_cart_saga = (payload) => ({type: ADD_TO_CART_SAGA, payload});
const remove_from_cart = (product) => ({ type: REMOVE_FROM_CART, payload: product });
const remove_from_cart_saga = (payload) => ({ type: REMOVE_FROM_CART_SAGA, payload });
const increment = () => (console.log("increment action called"),{ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });

export {
    ADD_TO_CART,
    ADD_TO_CART_SAGA,
    REMOVE_FROM_CART,
    REMOVE_FROM_CART_SAGA,
    INCREMENT,
    DECREMENT,
    add_to_cart,
    add_to_cart_saga,
    remove_from_cart,
    remove_from_cart_saga,
    increment,
    decrement
}