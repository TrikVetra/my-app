import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {  
    isFetching: false, 
    id: null,
    email: null,
    login: null,
    isAuth: false,
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

export default authReducer