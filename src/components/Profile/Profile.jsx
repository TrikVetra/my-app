
import MyPostsContainer from './MyPosts/MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import style from './Profile.module.css'


const Profile = (props) => {  
    return (
        <div className={style.profile}>            
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}   
                         auth={props.auth}    
                         savePhoto={props.savePhoto}                  
            />
            <MyPostsContainer />   
        </div>
    );
}

export default Profile;

