//import classes from './NewPost.module.css';
import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../../redux/profileReducer';
import MyPosts from './MyPosts';

const NewPostContainer = (props) => {

let state = props.store.getState();

let addNewPost = () => {        
    props.store.dispatch(addPostActionCreator());       
     
}

let onPostChange = (text) => {
    
    let action = updateNewPostTextActionCreator (text);
    props.store.dispatch(action);
    
}

    return (
        <MyPosts updateNewPostText={onPostChange} 
                 addPost={addNewPost}
                 newPostText={state.profilePage.newPostText}
                 postData={state.profilePage.postData}
                 />
    );
}

export default NewPostContainer;

