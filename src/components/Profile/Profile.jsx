import Autor from './Autor/Autor';
import NewPost from './MyPosts/NewPost/NewPost';
import Post from './MyPosts/Post/Post';
import classes from './Profile.module.css';
import ProfileHeader from './ProfileHeader/ProfileHeader';


const Profile = () => {
    return (
        <div>
            
                <ProfileHeader />
                <Autor />
                <NewPost />
                <Post message = 'My first post'/>
                <Post message = 'Расскажу о муравьях'/>
                <Post message = 'И о снеговиках'/>
          
           
           
        </div>
    );
}

export default Profile;