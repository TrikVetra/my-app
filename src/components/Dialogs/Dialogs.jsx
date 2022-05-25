import DialogItem from "./DialogItem/DialogItem"
import classes from './Dialogs.module.css'
import MessageItem from './MessageItem/MessageItem'
import React from 'react'

import { Field, reduxForm } from "redux-form"
import { Textarea } from "../Common/FormsControls/FormsControls"
import { required, maxLengthCreator } from '../../utils/validators/validators'

const maxLength15 = maxLengthCreator(15);

const dialogMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'сообщение'}
                    name={'message'}
                    component={Textarea}
                    type={'text'}
                    validate={[required, maxLength15]} />
            </div>
            <div>
                <button type='submit'> Создать </button>
            </div>
        </form>
    )
}

const DialogReduxForm = reduxForm({ //контейнерная компонента для подключения Redux-form
    form: 'dialogMessage'
})(dialogMessageForm)

const Dialogs = (props) => {


    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map(
        dialog => <DialogItem id={dialog.id} name={dialog.name} key={dialog.id} />
    )

    let messagesElements = state.messagesData.map(
        messages => <MessageItem id={messages.id} message={messages.message} key={messages.id} />
    )

    const addNewMessage = (values) => {
        props.addMessage(values.message);
    }

    return (
        <div className={classes.Dialogs}>

            <div className={classes.Dialog_items}>
                {dialogsElements}
            </div>

            <div className={classes.Messages}>
                <div>{messagesElements}</div>
                <DialogReduxForm onSubmit={addNewMessage} />
            </div>
        </div>
    )

}

export default Dialogs;