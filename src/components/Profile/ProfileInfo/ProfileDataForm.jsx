import classes from './ProfileInfo.module.css';
import { Contact } from './ProfileInfo';
import { CreateField } from '../../Common/FormsControls/FormsControls';
import { Input, Textarea } from '../../Common/FormsControls/FormsControls';
import { reduxForm } from "redux-form"
import style from "../../Common/FormsControls/FormsControls.module.css"



const ProfileDataForm = ({onSubmit, profile, error}) => {
    return <form className={classes.autor_description} onSubmit={onSubmit}>            
            <div><button type='submit'>Сохранить изменения</button></div>  
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}          
            {CreateField('Имя', 'fullName', Input, 'text', [])}
            {CreateField('О себе', 'aboutMe', Input, 'text', [])}
            {CreateField('', 'lookingForAJob', Input, 'checkbox', [], 'Ищешь работу?')}
            {CreateField('Что умеешь?', 'lookingForAJobDescription', Textarea, 'text', [])}

            <div> <b>Contacts:</b><br></br>
                {Object.keys(profile.contacts).map(key => {
                    return <div key={key}>
                        {CreateField(key, 'contacts.' + key, Input, 'text', [])}
                        
                    </div>
                })}
            </div>
        </form>
    
}

const ProfileDataReduxForm = reduxForm({ //контейнерная компонента для подключения Redux-form
    form: 'edit-profile'
})(ProfileDataForm )

export default ProfileDataReduxForm 