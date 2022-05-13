import React from "react"

class ProfileStatus extends React.Component {
    //Тут используется локальный State
    state = {
        editMode: false
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
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={ this.activateEditMode }>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        {/* Событие onBlur срабатывает когда уходит фокус из элемента */}
                        <input autoFocus={true} onBlur={ this.deactivateEditMode } value={this.props.status} />
                    </div>
                }
            </div>
        )
    }

}

export default ProfileStatus