import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogReducer'
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';
import { Navigate } from "react-router-dom"

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

//Это HOC который редиректит на другую страницу если пользователь не авторизован.
let AuthRedirectComponent = (props) => { 
    if (!props.isAuth) return <Navigate to="/login" />
    return <Dialogs {...props}/>
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;