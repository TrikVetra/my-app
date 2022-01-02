import Autor from './Autor/Autor';
import NewPost from './MyPosts/NewPost/NewPost';
import Post from './MyPosts/Post/Post';
import classes from './Profile.module.css';
import ProfileHeader from './ProfileHeader/ProfileHeader';


const Profile = () => {
    return (
        <div className={classes.Profile}>
            
                <ProfileHeader />
                <Autor />
                <NewPost />
                <Post />
                <Post />
                <Post />
          
           
           
        </div>
    );
}

export default Profile;