
import classes from './ProfileInfo.module.css';
import userPhoto from '../../../assets/img/monkey.png';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';

const ProfileInfo = (props) => {

    const photoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    if (!props.profile) { //Если данных ещё нет, грузим прелоадер.
        return (<Preloader/>)
    } else  return (  
        <div className={classes.profile_wrapper}>
            <div className={classes.status}>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                
            </div>
            <div className={classes.autor}>

                <img alt='hear' src={props.profile.photos.large || userPhoto}></img>
                {props.profile.userId === props.auth.id ? <input type={"file"} onChange={photoSelected}/> : null }
                <ProfileData profile = {props.profile}/>
                
            </div>
            
        </div>
    )

}

const ProfileData = ({profile}) => {
    return (
        <div className={classes.autor_description}>
            <div>
                <b>Имя:</b> {profile.fullName}
            </div>
            <div>
                <b>О себе:</b> {profile.aboutMe}<br></br>
            </div>
            <div>
                <b>Ищещь работу?</b> {profile.fullName.lookingForAJob ? "Да" : "Нет"}<br></br>
            </div>
            {profile.fullName.lookingForAJob
                ? <div><b>Что умеешь?</b> {profile.lookingForAJobDescription}</div>
                : null
            }
            <div> <b>Contacts:</b><br></br>
                {Object.keys(profile.contacts).map(key => {
                    if (profile.contacts[key]) {
                        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                    }
                })}
            </div>
        </div>
    )
}

const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div className={classes.contacts}>
            <small><b>{contactTitle}</b>: {contactValue}</small>
        </div>
    )
}

export default ProfileInfo