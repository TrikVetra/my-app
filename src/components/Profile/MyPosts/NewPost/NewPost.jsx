import classes from './NewPost.module.css';
import React from 'react';

const NewPost = (props) => {

let newPostElement = React.createRef();

let addNewPost = () => {
    debugger;
    let text = newPostElement.current.value;    
    props.addPost(text);
    debugger;
    
}

    return (
        <div className={classes.newPost}>
            <textarea ref={newPostElement}></textarea>
            <div>
                <button onClick={addNewPost}> Создать </button>
            </div>

        </div>

    );
}

export default NewPost;