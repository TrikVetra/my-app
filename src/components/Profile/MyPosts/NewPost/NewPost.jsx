import classes from './NewPost.module.css';

const NewPost = () => {
    return (
        <div className={classes.newPost}>
            <textarea></textarea>
            <div>
                <button> Создать </button>
            </div>

        </div>

    );
}

export default NewPost;