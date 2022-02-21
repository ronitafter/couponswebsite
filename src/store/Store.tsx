import { combineReducers, createStore } from "redux";
import { storeReducer } from "./StoreState";

const reducers = combineReducers({
   StoreState: storeReducer,
})

const Store = createStore(reducers);

export default Store;