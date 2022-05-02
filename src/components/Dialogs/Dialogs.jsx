import DialogItem from "./DialogItem/DialogItem"
import classes from './Dialogs.module.css'
import MessageItem from './MessageItem/MessageItem'
import React from 'react'
import { Navigate } from "react-router-dom"

const Dialogs = (props) => {
    

    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map (
        dialog => <DialogItem id = {dialog.id} name = {dialog.name} key = {dialog.id}/>
    )

    let messagesElements = state.messagesData.map (
        messages => <MessageItem id = {messages.id} message = {messages.message} key = {messages.id}/>
    )
 
    let newMessageElement = React.createRef()

    let addNewMessage = () => {    
        props.addMessage();           
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value
        props.updateNewMessageText (text)
    }
    
    if (props.isAuth === false) return <Navigate to="/login" />
    else return (
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