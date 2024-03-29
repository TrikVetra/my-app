import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let redusers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage:   usersReducer,
    auth:        authReducer,
});

let store = createStore(redusers);

window.store = store;

export default store;