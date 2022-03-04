import classes from './NewPost.module.css';
import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../../redux/profileReducer';

const NewPost = (props) => {

let newPostElement = React.createRef();

let addNewPost = () => {        
    props.dispatch(addPostActionCreator());        
}

let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator (text);
    props.dispatch(action);
}

    return (
        <div className={classes.newPost}>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            <div>
                <button onClick={addNewPost}> Создать </button>
            </div>

        </div>

    );
}

export default NewPost;

