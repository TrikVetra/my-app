import Autor from './Autor/Autor';
import NewPost from './MyPosts/NewPost/NewPost';
import Post from './MyPosts/Post/Post';
import classes from './Profile.module.css';
import ProfileHeader from './ProfileHeader/ProfileHeader';


const Profile = (props) => {

    

    let postElement = props.state.postData.map (
        post => <Post message = {post.message}/>
    )

    return (
        <div>
            
                <ProfileHeader />
                <Autor />
                <NewPost dispatch={props.dispatch}
                         newPostText={props.state.newPostText}
                />

                {postElement}

           
        </div>
    );
}

export default Profile;

