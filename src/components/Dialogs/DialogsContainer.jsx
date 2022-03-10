import DialogItem from "./DialogItem/DialogItem";
import classes from './Dialogs.module.css';
import MessageItem from './MessageItem/MessageItem';
import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogReducer'
import Dialogs from "./Dialogs";




const DialogsContainer = (props) => {   

    let state = props.store.getState().dialogsPage;

    let addNewMessage = () => {        
        props.store.dispatch(addMessageActionCreator());       
         
    }
    
    let onMessageChange = (text) => {
        
        let action = updateNewMessageTextActionCreator (text);
        props.store.dispatch(action);
        
    }

    return <Dialogs updateNewMessageText={onMessageChange}
                    addMessage={addNewMessage}
                    dialogsPage={state}/>

}

export default DialogsContainer;