import classes from '../Dialogs.module.css'

const MessageItem = (props) => {
    return (
        <div className={classes.Message}> {props.message} </div>
    )
}

export default MessageItem