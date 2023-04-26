import {put , takeLatest} from "redux-saga/effects";
import { ADD_TO_CART_SAGA, EMOVE_FROM_CART_SAGA, REMOVE_FROM_CART_SAGA, add_to_cart, remove_from_cart } from "./cart.action";
// import {INCREMENT_ASYNC, DECREMENT_ASYNC, increment, decrement} from "./counter.action";

function* add_to_cart_saga(action) {
    yield put (add_to_cart(action.payload));
}

function* remove_from_cart_saga(action) {
    console.log("remove cart saga called")
    yield put (remove_from_cart(action.payload));
}

export function* cartSaga(){
    
    yield takeLatest(ADD_TO_CART_SAGA, add_to_cart_saga);
    yield takeLatest(REMOVE_FROM_CART_SAGA, remove_from_cart_saga);
}
