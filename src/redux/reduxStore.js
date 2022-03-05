import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";

let redusers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
});

let store = createStore(redusers);

export default store;