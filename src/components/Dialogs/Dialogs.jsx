import DialogItem from "./DialogItem/DialogItem";
import classes from './Dialogs.module.css'
import MessageItem from "./MessageItem/MessageItem";


const Dialogs = (props) => {

    let dialogsData = [
         {id: 1, name: 'Vika'},
         {id: 2, name: 'Tanya'},
         {id: 3, name: 'Mika'}
    ];

    let messagesData = [
        { id: 1, message: 'Привет' },
        { id: 2, message: 'Как дела?' },
        { id: 3, message: 'Хорошо' },
        { id: 4, message: 'Как всегда' }
    ]

    let dialogsElements = dialogsData.map (
        dialog => <DialogItem id = {dialog.id} name = {dialog.name}/>
    )

    let messagesElements = messagesData.map (
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