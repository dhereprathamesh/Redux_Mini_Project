import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga"
import { all } from "redux-saga/effects";

// import counterReducer from "./Counter/counter.reducer"
import CartReducer from "./Cart/cart.reducer";
// import { counterSaga } from "./Counter/counter.saga";
import { cartSaga } from "./Cart/cart.saga";
import { composeWithDevTools } from 'redux-devtools-extension';



const combinedReducer = combineReducers({ CartReducer});
const sagaMiddleware = createSagaMiddleware();

const store = createStore(combinedReducer, applyMiddleware(sagaMiddleware));
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

function* rootSaga() {
    yield all([cartSaga()]);

}
sagaMiddleware.run(rootSaga)

export default store;