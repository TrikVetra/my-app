
type DialogType = {
    id: number
    name: string
}
type MessagesType = {
    id: number
    message: string
}
let initialState = {
    dialogsData: [
        { id: 1, name: 'Vika' },
        { id: 2, name: 'Tanya' },
        { id: 3, name: 'Mika' }
    ] as DialogType[],

    messagesData: [
        { id: 1, message: 'Привет' },
        { id: 2, message: 'Как дела?' },
        { id: 3, message: 'Хорошо' },
        { id: 4, message: 'Как всегда' }
    ] as Array<MessagesType>,

    newMessageText: "Yo!"
}
export type InitialStateType = typeof initialState

const ADD_MESSAGE = 'ADD-MESSAGE';

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
    
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

type AddMessageActionType = {
    type: typeof ADD_MESSAGE
    message: string
}
export const addMessageActionCreator = (message: string): AddMessageActionType =>  
    ({
        type: ADD_MESSAGE,
        message
    }) //return type

export default dialogsReducer;