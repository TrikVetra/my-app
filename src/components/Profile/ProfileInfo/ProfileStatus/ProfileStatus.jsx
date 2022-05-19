import React from "react"

class ProfileStatus extends React.Component {

    //Тут используется локальный State
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => { //Если объявить метод классовой функции "стандартно", а не через стрелочную, то надо его отдельно байндить, иначе потеряется this.
        //this.state.editMode = true
        //this.forceUpdate() //Намёк реакту, что изменился state и надо бы его перерисовать. "Топорный метод". Надо избегать.
        
        this.setState({ //Правильно так. Это асинхронный метод.
            editMode: true
        })
    }

    deactivateEditMode = () => { 
        this.setState({ 
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusCange = (e) => {         
        this.setState({ 
            status: e.currentTarget.value
        })
    }

    componentDidUpdate (prevProps, prevState) { //Компонента жизненного цикла, вызываемая, когда обновилась компонента. prevProps и prevState приходят по умолчанию.
        if (this.props.status !== prevProps.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        {/* Здесь статус показывается из пропсов потому что ещё не обновился. */}
                        <span onDoubleClick={ this.activateEditMode }>{this.props.status || "------" }</span> 
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        {/* Событие onBlur срабатывает когда уходит фокус из элемента
                        Здесь статус показывается из state потому что мы его меняем. 
                        Если value зафиксировано, обязательно должен быть onChange иначе ничего не будет меняться.*/}
                        <input onChange={this.onStatusCange} autoFocus={true} onBlur={ this.deactivateEditMode } value={this.state.status} />
                    </div>
                }
            </div>
        )
    }

}

export default ProfileStatus