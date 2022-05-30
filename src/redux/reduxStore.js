import { applyMiddleware, combineReducers, createStore } from "redux"
import profileReducer from "./profileReducer"
import dialogReducer from "./dialogReducer"
import usersReducer from "./usersReducer"
import authReducer from "./authReducer"
import thunkMiddleware from  "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import appReducer from "./appReducer"

let redusers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

let store = createStore(redusers, applyMiddleware(thunkMiddleware)) //applyMiddleware нужно чтобы диспатчить функции-Thunkи

window.store = store

export default store