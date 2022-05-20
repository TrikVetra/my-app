import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {  
    isFetching: false, 
    id: 23392,
    email: null,
    login: null,
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
export const setUserData = (id, email, login) =>  
    ({type: SET_USER_DATA, userData :{id, email, login}})

//ThunkCreators
export const getCurrentUserThunkCreator = () => {
    return (dispatch) => {
        authAPI.getCurrentUser()
            .then(response => {
                if (response.data.resultCode === 0){
                    let {id, login, email} = response.data.data
                    dispatch(setUserData(id,email,login))                    
                }            
            }
        );
    }
}

export const userLoginThunkCreator = (userData) => { 
    return (dispatch) => {
        authAPI.loginUser(userData)
            .then(response => {
                if (response.data.resultCode === 0){
                    console.log(response.data)
                }
            })
    }
}

export default authReducer