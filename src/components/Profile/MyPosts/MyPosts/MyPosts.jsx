import classes from './MyPosts.module.css';
import React from 'react';
import Post from '../Post/Post';
import {Field, reduxForm} from "redux-form" 

const profileMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'сообщение'} name={'message'} component={'input'} type={'text'} />
            </div>
            <div>
                <button type='submit'> Создать </button>
            </div>
        </form>
    )
}

const MessageReduxForm = reduxForm({ //контейнерная компонента для подключения Redux-form
    form: 'profileMessage'
})(profileMessageForm)

const NewPost = (props) => {

// let newPostElement = React.createRef();

// let onAddPost = () => {       
          
//     props.addPost(); 
// }

// let onPostChange = () => {
//     let text = newPostElement.current.value;
//     props.updateNewPostText(text);
// }


let postElement = props.postData.map (
    post => <Post message = {post.message} key = {post.id}/>
)

const onSubmit = (values) => {
    props.addPost(values.message);
}

    return (
        <div className={classes.newPost}>
            {/* <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            <div>
                <button onClick={onAddPost}> Создать </button>
            </div> */}
            <div>
                <MessageReduxForm onSubmit={onSubmit}/>
            </div>
            

            <div>{postElement}</div>    
        </div>

    );
}

export default NewPost;

 