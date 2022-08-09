
import classes from './ProfileInfo.module.css';
import userPhoto from '../../../assets/img/monkey.png';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';
import React, { useState } from "react"
import ProfileDataReduxForm from './ProfileDataForm';

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false)
    let isOwner = false    

    const photoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        formData.preventDefault();
        let Data = {}
        Data.fullName = formData.target[1].value 
        Data.about = formData.target[2].value 
        Data.lookingForAJob = formData.target[3].value 
        Data.lookingForAJobDescription = formData.target[4].value 
        console.log(Data) 
        setEditMode(false)
        // props.updateProfileThunkCreator(formData.email, formData.password, formData.rememberMe)
    }

    if (!props.profile) { //Если данных ещё нет, грузим прелоадер.
        return (<Preloader />)
    } else return (
        <div className={classes.profile_wrapper}>

            <div className={classes.status}>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
            <div className={classes.autor}>

                <img alt='hear' src={props.profile.photos.large || userPhoto}></img>
                {props.profile.userId === props.auth.id ? isOwner = true : isOwner = false}
                <div>{isOwner ? <input type={"file"} onChange={photoSelected} /> : null}</div>
                
                {editMode 
                ? <ProfileDataReduxForm profile={props.profile} onSubmit={onSubmit}/> 
                : <ProfileData profile={props.profile} toggleEditMode={ () => {setEditMode(true)} } isOwner={isOwner} />
                }
                {editMode}

            </div>

        </div>
    )

}

const ProfileData = ({profile, toggleEditMode, isOwner}) => {
    return (
        <div className={classes.autor_description}>
             {isOwner ? <button onClick={toggleEditMode}>Редактировать профиль</button> : null}
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



export const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div className={classes.contacts}>
            <small><b>{contactTitle}</b>: {contactValue}</small>
        </div>
    )
}

export default ProfileInfo