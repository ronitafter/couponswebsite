import { combineReducers, createStore } from "redux";
import { storeReducer } from "./StoreState";

// creating the store...
//initial state?
const reducers = combineReducers({
   StoreState: storeReducer,
})

const Store = createStore(reducers);

export default Store;