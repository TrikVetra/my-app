

let initialState = {
    dialogsData: [
        { id: 1, name: 'Vika' },
        { id: 2, name: 'Tanya' },
        { id: 3, name: 'Mika' }
    ],

    messagesData: [
        { id: 1, message: 'Привет' },
        { id: 2, message: 'Как дела?' },
        { id: 3, message: 'Хорошо' },
        { id: 4, message: 'Как всегда' }
    ],

    newMessageText: "Yo!"
}

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_MESSAGE: 
            let newMessage =
            {
                id: 5,
                message: action.message,
            };
            
            return {
                ...state,      // возвращаем копию состояния
                messagesData: [...state.messagesData, newMessage]
            };
        
        case UPDATE_NEW_MESSAGE_TEXT: 
            return {
                ...state,
                newMessageText: action.newText
            };
        
        default:
            return state;
    }
    
}

export const addMessageActionCreator = (message) =>  
    ({
        type: ADD_MESSAGE,
        message
    }) //return type
    

export const updateNewMessageTextActionCreator = (text) => //return type, newText
    ({
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text    
    })

export default dialogsReducer;