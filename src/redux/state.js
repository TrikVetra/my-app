import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";

let store = {
    _state: {

        profilePage: {
    
            postData: [
                { id: 1, message: 'My first post' },
                { id: 2, message: 'Расскажу о муравьях' },
                { id: 3, message: 'И о снеговиках' }
            ],
    
            newPostText: "Yo!"
        },
    
        dialogsPage: {
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
    },

    _callSubscriber () {
        console.log('state changed');
    },

    getState (){
        return this._state;
    },
    subscriber (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){ // {type: 'ADD-POST'}     
        this._state.profilePage = profileReducer (this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer (this._state.dialogsPage, action);
        
        this._callSubscriber(this._state);
    }

}

window.store = store;
export default store;