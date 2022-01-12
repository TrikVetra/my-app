import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css'

const Dialog_item = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={classes.Dialog}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.Message}> {props.message} </div>
    )
}

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
        dialog => <Dialog_item id = {dialog.id} name = {dialog.name}/>
    )

    let messagesElements = messagesData.map (
        messages => <Message id = {messages.id} message = {messages.message}/>
    )
      
    console.log(dialogsElements);
    console.log(messagesElements);
    

    return (
        <div className = {classes.Dialogs}>

            <div className = {classes.Dialog_items}>

                {dialogsElements}

                {/* <Dialog_item id = {dialogsData[0].id} name = {dialogsData[0].name}/>
                <Dialog_item id = {dialogsData[1].id} name = {dialogsData[1].name}/>
                <Dialog_item id = {dialogsData[2].id} name = {dialogsData[2].name}/> */}

            </div>

            <div className={classes.Messages}>

                {messagesElements}

                {/* <Message id = {messagesData[0].id} message = {messagesData[0].message}/>
                <Message id = {messagesData[1].id} message = {messagesData[1].message}/>
                <Message id = {messagesData[2].id} message = {messagesData[2].message}/>
                <Message id = {messagesData[3].id} message = {messagesData[3].message}/> */}

            </div>
        </div>
    )

}

export default Dialogs;