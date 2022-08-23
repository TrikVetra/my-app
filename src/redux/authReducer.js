import { stopSubmit } from "redux-form";
import { authAPI, loginAPI, securityAPI } from "../api/api";
const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CUPTCHA_URL_SUCCESS = 'auth/GET_CUPTCHA_URL_SUCCESS'


let initialState = {
    isFetching: false,
    id: null,
    email: '',
    login: '',
    isAuth: false,
    rememberMe: false,
    captchaUrl: null //if null then capcha is not required
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,      // возвращаем копию состояния                
                ...action.userData
            };
        case GET_CUPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaUrl: action.url
            }
        default:
            return state;
    }
}

//ActionCreators
export const setUserData = (id, email, login, isAuth) =>
    ({ type: SET_USER_DATA, userData: { id, email, login, isAuth } })

export const getCapchaUrlSuccess = (url) =>
({ type: GET_CUPTCHA_URL_SUCCESS, url })

//ThunkCreators
// export const getCurrentUserThunkCreator = () => (dispatch) => { //Лучше использовать async/aayt
//     return authAPI.getCurrentUser() //Если написать тут return, thunk будет возвращать promise
//         .then(response => {
//             if (response.data.resultCode === 0){
//                 let {id, login, email} = response.data.data
//                 dispatch(setUserData(id, email, login, true)) //isAuth = true             
//             }            
//         }
//     );    
// }

export const getCurrentUserThunkCreator = () => {
    return async (dispatch) => { //Лучше использовать async/aayt а не
        let response = await authAPI.getCurrentUser()

        if (response.data.resultCode === 0) {
            let { id, login, email } = response.data.data
            dispatch(setUserData(id, email, login, true)) //isAuth = true             
        }
    }
}



export const loginThunkCreator = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
        let response = await loginAPI.login(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            dispatch(getCurrentUserThunkCreator())
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrlThunkCreator())
            }
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "ERROR";
            let action = stopSubmit("login", { _error: message }); //Вызов метода redux-form, который призван в случае получения ошибки при неправильном вводе логина или пароля вывести ошибку.
            dispatch(action);
        }
    }
}

export const getCaptchaUrlThunkCreator = () => {
    return async (dispatch) => {
        let response = await securityAPI.getCaptchaUrl()
        const captchaUrl = response.data.url
        dispatch(getCapchaUrlSuccess(captchaUrl))
    }
}

export const logoutThunkCreator = () => {
    return async (dispatch) => {
        let response = await loginAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setUserData(0, '', '', false)) //id = 0, email = '', login = '', isAuth = false 
        }
    }
}

export default authReducer