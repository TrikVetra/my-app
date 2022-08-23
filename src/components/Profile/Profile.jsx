
import MyPostsContainer from './MyPosts/MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import style from './Profile.module.css'


const Profile = (props) => {  
    return (
        <div className={style.profile}>            
            <ProfileInfo isEditMode={props.isEditMode}
                         profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}   
                         auth={props.auth}    
                         savePhoto={props.savePhoto}   
                         saveProfile={props.saveProfile}    
                         changeEditMode={props.changeEditMode}           
            />
            <MyPostsContainer />   
        </div>
    );
}

export default Profile;

