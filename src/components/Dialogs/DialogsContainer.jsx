import {addMessageActionCreator} from '../../redux/dialogReducer.ts'
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';
import {withAuthRedirect} from "../../hoc/withAuthRedirect"
import { compose } from 'redux';

let mapStateToProps = (state) => { //Передаёт данные
    
return{
    dialogsPage: state.dialogsPage,
}
}

let mapDispatchToProps = (dispatch) => { //Передаёт колбэки

return {
    addMessage: (message) => {
        dispatch( addMessageActionCreator(message) );
    },
}
}

export default 
//По сути "оборачивает вызовы в конвейер". Взять последнюю (Dialogs), передать в параметр предыдущей, повторить.
compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect,
    )(Dialogs)