//import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../../redux/profileReducer';
import {connect} from 'react-redux';
import MyPosts from './MyPosts';

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

