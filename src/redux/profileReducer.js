import { profileAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
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
                message: action.message
            }
            return {
                ...state,       //возвращаем копию состояния
                postData: [...state.postData, newPost],
                newPostText: ''
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        default:
            return state;
    }

}


//ActionCreators
export const addPostActionCreator = (message) =>
({
    type: ADD_POST,
    message
}) //return type

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const setStatus = (status) => ({ type: SET_STATUS, status })


//ThunkCreators
export const getCurrentUserDataThunkCreator = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getCurrentUserData(userId)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)                          
        dispatch(setUserProfile(response.data))
    }
}

export const getStatusThunkCreator = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data))
    }
}

export const updateStatusThunkCreator = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}

export default profileReducer;