import {Field, reduxForm} from "redux-form" //reduxForm на сегодняшний день устарели. Вместо них надо использовать finalForm или Formik
import { required } from "../../utils/validators/validators"
import { Input } from "../Common/FormsControls/FormsControls"
import { connect } from "react-redux"
import { loginThunkCreator, logoutThunkCreator } from "../../redux/authReducer"

const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'email'} 
                        name={'email'} 
                        component={Input} 
                        type={'text'}
                        validate={[required]}
                    />
                </div>
                <div>
                    <Field placeholder={'password'} 
                        name={'password'} 
                        component={Input} 
                        type={'password'} 
                        validate={[required]}
                    />
                </div>
                <div>
                    <Field component={Input} 
                        type={'checkbox'} 
                        name={'rememberMe'}
                    /> remember me
                </div>
                <div>
                    <button type='submit'> Login </button>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm({ //контейнерная компонента для подключения Redux-form
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
        props.loginThunkCreator(formData.email, formData.password, formData.rememberMe)
    }

    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default connect(null, {loginThunkCreator, logoutThunkCreator}) (Login)



