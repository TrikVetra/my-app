import DialogItem from "./DialogItem/DialogItem";
import classes from './Dialogs.module.css';
import MessageItem from './MessageItem/MessageItem';
import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogReducer'
import Dialogs from "./Dialogs";
import StoreContext from '../../storeContext';

const DialogsContainer = (props) => {   

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    

                    let state = store.getState().dialogsPage;

                    let addNewMessage = () => {        
                        store.dispatch(addMessageActionCreator());            
                    }
                    
                    let onMessageChange = (text) => {        
                        let action = updateNewMessageTextActionCreator (text);
                        store.dispatch(action);        
                    }

                    return <Dialogs updateNewMessageText={onMessageChange}
                    addMessage={addNewMessage}
                    dialogsPage={state} />
                }
            }
        </StoreContext.Consumer>
    )

}

export default DialogsContainer;