import {Field, reduxForm} from "redux-form" //reduxForm на сегодняшний день устарели. Вместо них надо использовать finalForm или Formik


const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'email'} name={'login'} component={'input'} type={'text'}/>
                </div>
                <div>
                    <Field placeholder={'password'} name={'password'} component={'input'} type={'text'}/>
                </div>
                <div>
                    <Field component={'input'} type={'checkbox'} name={'rememberMe'}/> remember me
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
    }

    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login



