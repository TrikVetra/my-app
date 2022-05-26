import { authAPI, loginAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {  
    isFetching: false, 
    id: 0,
    email: '',
    login: '',
    isAuth: false,
    rememberMe: false,
}

const authReducer = (state = initialState, action) => {    
    switch (action.type) {
        case SET_USER_DATA: 
            return {
                ...state,      // возвращаем копию состояния                
                ...action.userData,
                isAuth: true,
            };        
        default:
            return state;
    }    
}

//ActionCreators
export const setUserData = (id, email, login, isAuth) =>  
    ({type: SET_USER_DATA, userData :{id, email, login, isAuth}})

//ThunkCreators
export const getCurrentUserThunkCreator = () => {
    return (dispatch) => {
        authAPI.getCurrentUser()
            .then(response => {
                if (response.data.resultCode === 0){
                    let {id, login, email} = response.data.data
                    dispatch(setUserData(id, email, login, true)) //isAuth = true             
                }            
            }
        );
    }
}

export const loginThunkCreator = (email, password, rememberMe) => { 
    return (dispatch) => {
        loginAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0){
                    dispatch(getCurrentUserThunkCreator())
                }
            })
    }
}

export const logoutThunkCreator = () => {
    return (dispatch) => {
        loginAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0){
                    dispatch(setUserData(0, '', '', false)) //id = 0, email = '', login = '', isAuth = false 
                }
            })
    }
}

export default authReducer