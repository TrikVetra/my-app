import classes from './Autor.module.css';
import userPhoto from '../../../../assets/img/monkey.png';
import Preloader from '../../../Common/Preloader/Preloader'
import ProfileStatusWithHooks from '../ProfileStatus/ProfileStatusWithHooks';

const Autor = (props) => {
    if (!props.profile) { //Если данных ещё нет, грузим прелоадер.
        return (<Preloader/>)
    } else  return (  
        <div className={classes.profile_wrapper}>
            <div className={classes.status}>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
            <div className={classes.autor}>

                <img alt='hear' src={props.profile.photos.large || userPhoto}></img>

                <div className={classes.autor_description}>
                    <b>Имя:</b> {props.profile.fullName}<br></br>
                    <b>О себе:</b> {props.profile.aboutMe}<br></br>
                    <b>Ищещь работу?</b> {props.profile.fullName.lookingForAJob ? "Да" : "Нет"}<br></br>
                </div>
            </div>
        </div>
    );
}

export default Autor;