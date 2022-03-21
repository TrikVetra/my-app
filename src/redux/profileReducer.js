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
            
            //return stateCopy;

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

export default profileReducer;