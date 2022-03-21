const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let inetialState = {   
    usersData: [
        { id: 1, name: 'Tanya', status: 'here', location: {city: 'MSC', country: 'RUS'} },
        { id: 2, message: 'Расскажу о муравьях' },
        { id: 3, message: 'И о снеговиках' }
    ],
    //newPostText: "Yo!"
}


const usersReducer = (state = inetialState, action) => {
    
    switch (action.type) {
        
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

export default usersReducer;