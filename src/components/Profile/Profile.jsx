
import MyPostsContainer from './MyPosts/MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Profile = (props) => {
    
    
    return (
        <div>            
            <ProfileInfo profile={props.profile}
                         auth={props.auth}/>
            <MyPostsContainer />   
        </div>
    );
}

export default Profile;

