//import Autor from "./Autor/Autor";
import classes from './Autor/Autor.module.css';
import userPhoto from '../../../assets/img/monkey.png';
import Preloader from '../../Common/Preloader/Preloader'
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

                <div className={classes.autor_description}>
                    <b>Имя:</b> {props.profile.fullName}<br></br>
                    <b>О себе:</b> {props.profile.aboutMe}<br></br>
                    <b>Ищещь работу?</b> {props.profile.fullName.lookingForAJob ? "Да" : "Нет"}<br></br>
                </div>
            </div>
        </div>
    );

}

export default ProfileInfo