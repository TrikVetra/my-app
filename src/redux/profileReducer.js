const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {   
    postData: [
        { id: 1, message: 'My first post' },
        { id: 2, message: 'Расскажу о муравьях' },
        { id: 3, message: 'И о снеговиках' }
    ],
    newPostText: "Yo!",
    profile: null,
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
        
            
        
        default:
            return state;
    }
    
}

export const addPostActionCreator = () =>  
    ({type: ADD_POST,}) //return type
    

export const updateNewPostTextActionCreator = (text) => //return type, newText
    ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text    
    })

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export default profileReducer;