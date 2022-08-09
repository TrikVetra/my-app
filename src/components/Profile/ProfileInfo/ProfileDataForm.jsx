import classes from './ProfileInfo.module.css';
import { Contact } from './ProfileInfo';
import { CreateField } from '../../Common/FormsControls/FormsControls';
import { Input, Textarea } from '../../Common/FormsControls/FormsControls';
import { reduxForm } from "redux-form"



const ProfileDataForm = ({profile, toggleEditMode, onSubmit}) => {
    return (
        <form className={classes.autor_description} onSubmit={onSubmit}>            
            <div><button type='submit'>Сохранить изменения</button></div>            
            {CreateField('Имя', 'fullName', Input, 'text', [])}
            {CreateField('О себе', 'about', Input, 'text', [])}
            {CreateField('', 'lookingForAJob', Input, 'checkbox', [], 'Ищешь работу?')}
            {CreateField('Что умеешь?', 'lookingForAJobDescription', Textarea, 'text', [])}
            {/* <div>
                <b>О себе:</b> {profile.aboutMe}<br></br>
            </div>
            <div>
                <b>Ищещь работу?</b> {profile.fullName.lookingForAJob ? "Да" : "Нет"}<br></br>
            </div>
            {profile.fullName.lookingForAJob
                ? <div><b>Что умеешь?</b> {profile.lookingForAJobDescription}</div>
                : null
            } */}


            {/* <div> <b>Contacts:</b><br></br>
                {Object.keys(profile.contacts).map(key => {
                    if (profile.contacts[key]) {
                        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                    }
                })}
            </div> */}
        </form>
    )
}

const ProfileDataReduxForm = reduxForm({ //контейнерная компонента для подключения Redux-form
    form: 'edit-profile'
})(ProfileDataForm )

export default ProfileDataReduxForm 