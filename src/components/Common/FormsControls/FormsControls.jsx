import styles from './FormsControls.module.css'
import { Field } from "redux-form"

const FormControl = ({ input, meta: {touched, error}, ...props }) => { //такие параметры означают: достать отдельно из пропсов input и meta, child всё остальное передать в пропсах
    const hasError = touched && error;
    return (
        <div className={styles.formsControl + ' ' + (hasError ? styles.error : '')}>

            {props.children}

            {/* если поля касались и получилась ошибка согласно валидаторам, то будет отображаться span */}
            {hasError && <span> {error} </span>}
        </div>
    )
}

export const Textarea = (props) => {
    const { input, meta, ...restProps } = props; //деструктуризация, сделанная за пределами пропсов
    return <FormControl {...props} > <textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const { input, meta, ...restProps } = props;
    return <FormControl {...props} > <input {...input} {...restProps} /></FormControl>
}

export const CreateField = (placeholder, name, component, type, validators, text = '') => {
    return (
        <div>
            <Field placeholder={placeholder}
                name={name}
                component={component}
                type={type}
                validate={validators}
            /> {text}
        </div>
    )
}