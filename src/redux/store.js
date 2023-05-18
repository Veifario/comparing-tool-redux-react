import { createStore, combineReducers } from "redux";
import products from "./reducers/products";
import comparing from "./reducers/comparing";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ products, comparing });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
