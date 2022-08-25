import { profileAPI } from "../api/api"
import { stopSubmit } from "redux-form"

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_USER_STATUS'
const SAVE_PHOTO = 'SAVE_PHOTO'
const SAVE_PROFILE = 'SAVE_PROFILE'
const CHANGE_EDIT_MODE = 'CHANGE_EDIT_MODE'

let initialState = {
    postData: [
        { id: 1, message: 'My first post' },
        { id: 2, message: 'Расскажу о муравьях' },
        { id: 3, message: 'И о снеговиках' }
    ],
    newPostText: "Yo!",
    profile: null,
    status: 'OK',
    isEditMode: false
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
        case SAVE_PHOTO: {
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photos
                }
            }
        }
        case SAVE_PROFILE: {
            return {
                ...state,
                profile: {
                    ...state.profile,
                    fullName: action.fullName,
                    aboutMe: action.aboutMe,
                    lookingForAJob: action.lookingForAJob,
                    lookingForAJobDescription: action.lookingForAJobDescription
                }
            }
        }
        case CHANGE_EDIT_MODE: {
            return {
                ...state,
                isEditMode: action.isEditMode
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

export const changeEditMode = (isEditMode) => ({ type: CHANGE_EDIT_MODE, isEditMode })

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const setStatus = (status) => ({ type: SET_STATUS, status })

export const savePhoto = (photos) => ({ type: SAVE_PHOTO, photos })

// export const saveProfile = (profile) => ({ type: SAVE_PROFILE, profile, isEditMode })



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
        try {
            let response = await profileAPI.updateStatus(status)
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        } catch (error) {
            console.log(error)
        }
}
}

export const savePhotoThunkCreator = (file) => {
    return async (dispatch) => {
        let response = await profileAPI.savePhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(savePhoto(response.data.data.photos))
        }
    }
}

export const saveProfileThunkCreator = (profileData) => {
    return async (dispatch, getState) => {
        const userId = getState().auth.userId
        let response = await profileAPI.saveProfile(profileData)
        if (response.data.resultCode === 0) {            
            dispatch(getCurrentUserDataThunkCreator(userId))
            dispatch(changeEditMode(false))
        } else {
            changeEditMode(true)
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "ERROR";
            dispatch(stopSubmit("edit-profile", { _error: message })); //Вызов метода redux-form, который призван в случае получения ошибки при неправильном вводе логина или пароля вывести ошибку.
            dispatch(changeEditMode(true))
            return Promise.reject(message)

        }
    }
}

export default profileReducer;