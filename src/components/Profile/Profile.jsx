import Autor from './Autor/Autor';
import MyPostsContainer from './MyPosts/MyPosts/MyPostsContainer';
//import Post from './MyPosts/Post/Post';
import classes from './Profile.module.css';
import ProfileHeader from './ProfileHeader/ProfileHeader';

const Profile = (props) => {

    return (
        <div>
            
                <ProfileHeader />
                <Autor />
                <MyPostsContainer store = {props.store}
                />

                

           
        </div>
    );
}

export default Profile;

