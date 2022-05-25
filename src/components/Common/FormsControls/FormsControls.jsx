import styles from './FormsControls.module.css'

const FormControl = ({input, meta, ...props}) => { //такие параметры означают: достать отдельно из пропсов input и meta, child всё остальное передать в пропсах
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formsControl + ' ' + (hasError ? styles.error : '')}>
            
            {props.children}

            {/* если поля касались и получилась ошибка согласно валидаторам, то будет отображаться span */}
            {hasError && <span> {meta.error} </span>}
        </div>
    )
}

export const Textarea = (props) => { 
    const {input, meta, ...restProps} = props; //деструктуризация, сделанная за пределами пропсов
    return <FormControl {...props} > <textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {   
    const {input, meta, ...restProps} = props;
    return <FormControl {...props} > <input {...input} {...restProps}/></FormControl>
}