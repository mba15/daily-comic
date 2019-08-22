import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import comic from "./comic.js"

const rootReducer = combineReducers({comic});

let store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState())
})

export default store;