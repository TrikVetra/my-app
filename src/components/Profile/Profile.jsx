
import MyPostsContainer from './MyPosts/MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Profile = (props) => {  
    return (
        <div>            
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}   
                         auth={props.auth}/>
            <MyPostsContainer />   
        </div>
    );
}

export default Profile;

