
import MyPostsContainer from './MyPosts/MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { Navigate } from "react-router-dom"

const Profile = (props) => {
    
    if (props.isAuth === false) return <Navigate to="/login" />
    return (
        <div>            
            <ProfileInfo profile={props.profile}
                         auth={props.auth}/>
            <MyPostsContainer />   
        </div>
    );
}

export default Profile;

