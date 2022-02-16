import DialogItem from "./DialogItem/DialogItem";
import classes from './Dialogs.module.css'
import MessageItem from "./MessageItem/MessageItem";


const Dialogs = (props) => {



    let dialogsElements = props.state.dialogsData.map (
        dialog => <DialogItem id = {dialog.id} name = {dialog.name}/>
    )

    let messagesElements = props.state.messagesData.map (
        messages => <MessageItem id = {messages.id} message = {messages.message}/>
    )
 

    return (
        <div className = {classes.Dialogs}>

            <div className = {classes.Dialog_items}>

                {dialogsElements}

            </div>

            <div className={classes.Messages}>

                {messagesElements}

            </div>
        </div>
    )

}

export default Dialogs;