import classes from './MyPosts.module.css';
import React from 'react';
import Post from '../Post/Post';

const NewPost = (props) => {

let newPostElement = React.createRef();

let onAddPost = () => {       
          
    props.addPost(); 
}

let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
}


let postElement = props.postData.map (
    post => <Post message = {post.message} key = {post.id}/>
)

    return (
        <div className={classes.newPost}>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            <div>
                <button onClick={onAddPost}> Создать </button>
            </div>
            <div>{postElement}</div>
            

        </div>

    );
}

export default NewPost;

