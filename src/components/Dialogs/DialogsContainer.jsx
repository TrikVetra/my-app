//import DialogItem from "./DialogItem/DialogItem";
//import classes from './Dialogs.module.css';
//import MessageItem from './MessageItem/MessageItem';
//import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogReducer'
import Dialogs from "./Dialogs";
//import StoreContext from '../../storeContext';
import {connect} from 'react-redux';

// const DialogsContainer = (props) => {   

//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {

                    

//                     let state = store.getState().dialogsPage;

//                     let addNewMessage = () => {        
//                         store.dispatch(addMessageActionCreator());            
//                     }
                    
//                     let onMessageChange = (text) => {        
//                         let action = updateNewMessageTextActionCreator (text);
//                         store.dispatch(action);        
//                     }

//                     return <Dialogs updateNewMessageText={onMessageChange}
//                     addMessage={addNewMessage}
//                     dialogsPage={state} />
//                 }
//             }
//         </StoreContext.Consumer>
//     )

// }

let mapStateToProps = (state) => { //Передаёт данные
return{
    dialogsPage: state.dialogsPage,
}
}

let mapDispatchToProps = (dispatch) => { //Передаёт колбэки

return {
    updateNewMessageText: (text) => {
        let action = updateNewMessageTextActionCreator (text);
        dispatch(action); 
    },
    addMessage: () => {
        dispatch(addMessageActionCreator());
    },
}
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;