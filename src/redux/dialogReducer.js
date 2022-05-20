

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
        
        default:
            return state;
    }
    
}

export const addMessageActionCreator = (message) =>  
    ({
        type: ADD_MESSAGE,
        message
    }) //return type

export default dialogsReducer;