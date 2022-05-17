import { profileAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_USER_STATUS'

let initialState = {   
    postData: [
        { id: 1, message: 'My first post' },
        { id: 2, message: 'Расскажу о муравьях' },
        { id: 3, message: 'И о снеговиках' }
    ],
    newPostText: "Yo!",
    profile: null,
    status: 'OK',
}


const profileReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_POST: {    
            let newPost = {     //готовим объект, который собираемся пушить
                id: 5, 
                message: state.newPostText
            }   
            return {...state,       //возвращаем копию состояния
                            postData: [...state.postData, newPost],
                            newPostText: ''};           
        }
        case UPDATE_NEW_POST_TEXT:{            
            return {...state,  //возвращаем копию состояния
                            newPostText: action.newText}
        }
        case SET_USER_PROFILE:{
            return {...state,
                            profile: action.profile}
        }
        case SET_STATUS:{
            return {...state,
                            status: action.status}
        }
            
        
        default:
            return state;
    }
    
}


//ActionCreators
export const addPostActionCreator = () =>  
    ({type: ADD_POST,}) //return type
    

export const updateNewPostTextActionCreator = (text) => //return type, newText
    ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text    
    })

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const setStatus = (status) => ({type: SET_STATUS, status})


//ThunkCreators
export const getCurrentUserDataThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getCurrentUserData(userId)    
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
             .then(response => {              
             dispatch(setUserProfile(response.data))           
             }
        ); 
    }
}

export const getStatusThunkCreator = (userId) => {
    
    return (dispatch) => {
        profileAPI.getStatus(userId)    
             .then(response => {                
                    dispatch(setStatus(response.data)) 
             }
        ); 
    }
}

export const updateStatusThunkCreator = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)    
             .then(response => {  
                if (response.data.resultCode === 0){              
                    dispatch(setStatus(status))   
                }        
             }
        ); 
    }
}

export default profileReducer;