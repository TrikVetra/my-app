import classes from './Post.module.css';

const Post = (props) => {
    
    return (

        <div className='posts'>
            <div className={classes.item}>
                {props.message}
            </div>
        </div>

    );
}

export default Post;