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
            ]
        }
    },

    getState (){
        return this._state;
    },

    _callSubscriber () {
        console.log('state changed');
    },

    addPost () {    

        let newPost = {
            id: 5, 
            message: this._state.profilePage.newPostText
        }
            
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText (newText) {          
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    subscriber (observer) {
        this._callSubscriber = observer;
    },

}

window.store = store;
export default store;
//export default state;

/*
let renderEntireTree = () => {
    console.log('state changed');
}
*/
/*
let state = {

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
        ]
    }
}
*/

/*
export const addPost = () => {    

    let newPost = {
        id: 5, 
        message: state.profilePage.newPostText
    }
        
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}
*/

/*
export const updateNewPostText = (newText) => {    
      
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}
*/

/*
export const subscriber = (observer) =>{
    renderEntireTree = observer;
}
*/

