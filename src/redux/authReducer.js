const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {  
    isFetching: false, 
    userData: {
        id: null,
        email: null,
        login: null,
        isAuth: false,
      }
}

const authReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case SET_USER_DATA:  
            return {
                ...state,      // возвращаем копию состояния
                ...action.userData,
                isAuth:true,
            };        
        default:
            return state;
    }    
}

export const setUserData = (id, email, login) =>  
    ({type: SET_USER_DATA, userData :{id, email, login}})

export default authReducer