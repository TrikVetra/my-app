import React, { useEffect, useState } from "react"

const ProfileStatusWithHooks = (props) => {

    // let stateWithSetState = useState(false); //useState - хук. Возвращает массив из 2 элементов
    // let editMode = stateWithSetState[0]; //В первом элементе переданное значение (false)
    // let setEditMode = stateWithSetState[1]; //Во втором функция, которая будет изменять первый элемент. Менять переменную напрямую нельзя, т.к она хранится где-то в глубинах реакта.
    //С помощью деструктурированного присваивания это пишется так:
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    //Используется вместо componentDidUpdate/componentDidMount классовых компонент
    useEffect( () => {
        setStatus(props.status)
    }, [props.status] ); //вызывается каждый раз, когда происходят какие-то изменения водном из элементов этого массива. Если массив не указать, то каждый раз когда перерисовывается jsx на странице. Если передать пустой массив, выполнится 1 раз при монтировании компоненты.

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => { 
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusCange = (e) => {      
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    {/* Здесь статус показывается из пропсов потому что ещё не обновился. */}
                    <span onDoubleClick={ activateEditMode }>{props.status || "------"}</span>
                </div>
            }
            {editMode &&
                <div>
                    {/* Событие onBlur срабатывает когда уходит фокус из элемента
                        Здесь статус показывается из state потому что мы его меняем. 
                        Если value зафиксировано, обязательно должен быть onChange иначе ничего не будет меняться.*/}
                    <input onChange={ onStatusCange } autoFocus={true} value={status} onBlur={ deactivateEditMode }/>
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks