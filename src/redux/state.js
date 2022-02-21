import { renderEntireTree } from "../render";



let state = {

    profilePage: {

        postData: [
            { id: 1, message: 'My first post' },
            { id: 2, message: 'Расскажу о муравьях' },
            { id: 3, message: 'И о снеговиках' }
        ],
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

export let addPost = (postMessage) => {
    

    let newPost = {
        id: 5, 
        message: postMessage
    }
    
    
    state.profilePage.postData.push(newPost);
 
    renderEntireTree(state);
}



export default state;