import classes from './NewPost.module.css';
import React from 'react';
import {addPost, updateNewPostText} from '../../../../redux/state';

const NewPost = (props) => {

let newPostElement = React.createRef();

let addNewPost = () => {    
    
    addPost();
        
}

let onPostChange = (props) => {
    let text = newPostElement.current.value;
    updateNewPostText(text);
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

