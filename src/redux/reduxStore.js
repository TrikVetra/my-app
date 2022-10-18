import { applyMiddleware, combineReducers, createStore, compose } from "redux"
import profileReducer from "./profileReducer"
import dialogReducer from "./dialogReducer.ts"
import usersReducer from "./usersReducer"
import authReducer from "./authReducer.ts"
import thunkMiddleware from  "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import appReducer from "./appReducer.ts"

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));

//let store = createStore(redusers, applyMiddleware(thunkMiddleware)) //applyMiddleware нужно чтобы диспатчить функции-Thunkи

window._store = store

export default store