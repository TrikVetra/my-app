import React from 'react';
import axios from 'axios';

import Header from "./Header";
import { connect } from 'react-redux';

import {
    setUserData,
    getCurrentUserThunkCreator,
    logoutThunkCreator
} from '../../redux/authReducer'
import { authAPI } from '../../api/api';

class HeaderContainer extends React.Component {
    
    componentDidMount () {
        this.props.getCurrentUserThunkCreator()    
        // authAPI.getCurrentUser()
        //     .then(response => {
        //         if (response.data.resultCode === 0){
        //             this.props.setUserData(response.data.data.id,response.data.data.email,response.data.data.login);                    
        //         }            
        //     }
        // );    
    }

    render(){
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({    
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps,
    {
        setUserData,
        getCurrentUserThunkCreator,
        logoutThunkCreator
    }) (HeaderContainer)