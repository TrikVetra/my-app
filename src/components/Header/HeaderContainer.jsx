import React from 'react';
import axios from 'axios';

import Header from "./Header";
import { connect } from 'react-redux';

import {setUserData} from '../../redux/authReducer'

class HeaderContainer extends React.Component {
    
    componentDidMount () {        
        //this.props.toggleIsFetchig(true); //отмечаем, что передаются данные чтобы отрисовать прелоадер
        
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
        {withCredentials:true}//отправляет куки, чтобы подтвердить авторизацию
        )
            .then(response => {
                if (response.data.resultCode === 0){
                    this.props.setUserData(response.data.data.id,response.data.data.email,response.data.data.login);
                    
                }            
            }
        );    
    }

    render(){
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps,{setUserData}) (HeaderContainer)