import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogReducer'
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';

let mapStateToProps = (state) => { //Передаёт данные
    
return{
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth,
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