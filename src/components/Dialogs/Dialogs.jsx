import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css'

const Dialog_item = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={classes.Dialog}>
            <NavLink to={path} > {props.name} </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.Message}> {props.message} </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={classes.Dialogs}>

            <div className={classes.Dialog_items}>

                <Dialog_item id='1' name='Vika'/>
                <Dialog_item id='2' name='Tanya'/>
                <Dialog_item id='3' name='Mika'/>

            </div>

            <div className={classes.Messages}>
                <Message message='Привет'/>
                <Message message='Как дела?'/>
                <Message message='Хорошо'/>
                <Message message='Как всегда'/>

            </div>
        </div>
    )

}

export default Dialogs;