import DialogItem from "./DialogItem/DialogItem";
import classes from './Dialogs.module.css';
import MessageItem from './MessageItem/MessageItem';
import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/state'

const Dialogs = (props) => {



    let dialogsElements = props.state.dialogsData.map (
        dialog => <DialogItem id = {dialog.id} name = {dialog.name}/>
    )

    let messagesElements = props.state.messagesData.map (
        messages => <MessageItem id = {messages.id} message = {messages.message}/>
    )
 
    let newMessageElement = React.createRef();

    let addNewMessage = () => {        
        props.dispatch(addMessageActionCreator());        
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = updateNewMessageTextActionCreator (text);
        props.dispatch(action);
    }

    return (
        <div className = {classes.Dialogs}>

            <div className = {classes.Dialog_items}>

                {dialogsElements}

            </div>

            <div className={classes.Messages}>

                <div>{messagesElements}</div>
                <div><textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText}></textarea></div>
                <div><button onClick={addNewMessage}>Отправить</button></div>

            </div>
        </div>
    )

}

export default Dialogs;