import Autor from './Autor/Autor';
import MyPostsContainer from './MyPosts/MyPosts/MyPostsContainer';
import ProfileHeader from './ProfileHeader/ProfileHeader';

const Profile = (props) => {

    return (
        <div>
            
                <ProfileHeader />
                <Autor />
                <MyPostsContainer />

                

           
        </div>
    );
}

export default Profile;

