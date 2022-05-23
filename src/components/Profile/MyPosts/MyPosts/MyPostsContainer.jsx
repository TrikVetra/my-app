//import React from 'react';
import {addPostActionCreator} from '../../../../redux/profileReducer';
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
        addPost: (message) => {
            dispatch(addPostActionCreator(message));
        },

    }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default NewPostContainer;

