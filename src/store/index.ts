import { combineReducers,applyMiddleware,createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { productReducer } from "./productReducer";

export const rootReducer = combineReducers({
    productReducer,
});

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));