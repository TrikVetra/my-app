const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let inetialState = {   
    postData: [
        { id: 1, message: 'My first post' },
        { id: 2, message: 'Расскажу о муравьях' },
        { id: 3, message: 'И о снеговиках' }
    ],
    newPostText: "Yo!"
}


const profileReducer = (state = inetialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5, 
                message: state.newPostText
            }   
                
            state.postData.push(newPost);
            state.newPostText = '';
            return state;
        
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

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

export default profileReducer;