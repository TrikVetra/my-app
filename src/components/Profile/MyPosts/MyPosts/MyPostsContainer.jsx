import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../../redux/profileReducer';
import {connect} from 'react-redux';
//import StoreContext from '../../../../storeContext';
import MyPosts from './MyPosts';

//const NewPostContainer = (props) => {


//     return (
//         <StoreContext.Consumer> 
//             {
//             (store) => {

//                 let state = store.getState();

//                 let addNewPost = () => {        
//                     store.dispatch(addPostActionCreator());            
//                 }
                
//                 let onPostChange = (text) => {    
//                     let action = updateNewPostTextActionCreator (text);
//                     store.dispatch(action);    
//                 }

//                 return <MyPosts updateNewPostText={onPostChange}
//                     addPost={addNewPost}
//                     newPostText={state.profilePage.newPostText}
//                     postData={state.profilePage.postData}
//                 />
//             }
//         }
//         </StoreContext.Consumer>
//     );
// }


let mapStateToProps = (state) => { //Передаёт данные
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => { //Передаёт колбэки

    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        },

    }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default NewPostContainer;

