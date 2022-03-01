import classes from './NewPost.module.css';
import React from 'react';
//import {addPost, updateNewPostText} from '../../../../redux/state';

const NewPost = (props) => {

let newPostElement = React.createRef();

let addNewPost = () => {        
    props.addPost();        
}

let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
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

