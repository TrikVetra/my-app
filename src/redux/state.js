const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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

    _addPost () { 

        let newPost = {
            id: 5, 
            message: this._state.profilePage.newPostText
        }   
            
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    _updateNewPostText (newText) {          
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    _addMessage () { 

        let newMessage = {
            id: 5, 
            message: this._state.dialogsPage.newMessageText
        }   
            
        this._state.dialogsPage.messagesData.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    
    _updateNewMessageText (newText) {          
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },

    dispatch(action){ // {type: 'ADD-POST'}
        if (action.type === ADD_POST) {
            this._addPost();
        } 
        else if (action.type === UPDATE_NEW_POST_TEXT){
            this._updateNewPostText (action.newText);
        }
        else if (action.type === ADD_MESSAGE){
            this._addMessage();
        }
        else if (action.type === UPDATE_NEW_MESSAGE_TEXT){
            this._updateNewMessageText (action.newText);
        }
    }

}

export const addPostActionCreator = () =>  
    ({type: ADD_POST,}) //return type
    

export const updateNewPostTextActionCreator = (text) => //return type, newText
    ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text    
    })

export const addMessageActionCreator = () =>  
    ({type: ADD_MESSAGE,}) //return type
    

export const updateNewMessageTextActionCreator = (text) => //return type, newText
    ({
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text    
    })

window.store = store;
export default store;