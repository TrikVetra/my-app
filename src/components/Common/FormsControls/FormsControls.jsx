export const Textarea = ({input, meta, ...props}) => { //такие параметры означают: достать отдельно из пропсов input и meta, всё остальное передать в пропсах 
    return (
        <div>
            <textarea {...input} {...props} type='text'/>
        </div>
    )
}

//export default Textarea