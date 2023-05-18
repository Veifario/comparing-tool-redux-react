import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import products from "./reducers/products";
import comparing from "./reducers/comparing";

const rootReducer = combineReducers({ products, comparing });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
