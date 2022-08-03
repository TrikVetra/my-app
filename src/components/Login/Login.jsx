import { reduxForm } from "redux-form" //reduxForm на сегодняшний день устарели. Вместо них надо использовать finalForm или Formik
import { required } from "../../utils/validators/validators"
import { Input, CreateField } from "../Common/FormsControls/FormsControls"
import { connect } from "react-redux"
import { loginThunkCreator, logoutThunkCreator } from "../../redux/authReducer"
import { Navigate } from "react-router-dom"
import style from "../Common/FormsControls/FormsControls.module.css"

const LoginForm = ({ handleSubmit, error }) => { //Если указываем параметры в фигурных скобках - это деструктуризация параметров. Получаем пропсы полностью и вытаскиваем только то, что интересно.
    return (
        <form onSubmit={handleSubmit}>
            {CreateField('email', 'email', Input, 'text', [required])}
            {CreateField('password', 'password', Input, 'password', [required])}
            {CreateField('', 'rememberMe', Input, 'checkbox', [], 'Remember Me')}
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
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

    if (props.isAuth) return <Navigate to="/profile" />
    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { loginThunkCreator, logoutThunkCreator })(Login)


