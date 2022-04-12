import Autor from "./Autor/Autor";
import ProfileHeader from "./ProfileHeader/ProfileHeader";

const ProfileInfo = (props) => {
    return (
        <div>
            <ProfileHeader />
            <Autor profile={props.profile}/>
        </div>
    )
}

export default ProfileInfo