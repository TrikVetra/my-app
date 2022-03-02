import classes from './NewPost.module.css';
import React from 'react';

const NewPost = (props) => {

let newPostElement = React.createRef();

let addNewPost = () => {        
    props.dispatch({type: 'ADD-POST'});        
}

let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
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

