import React from "react";
import {connect} from "react-redux";

import Profile from "./Profile";
import {
    setUserProfile,
    getCurrentUserDataThunkCreator,
    getStatusThunkCreator,
    updateStatusThunkCreator
} from "../../redux/profileReducer";
import { compose } from 'redux';

import { //В React6 вместо import withRouter нужно импортировать вот так, чтобы достать id текущего пользователя и прочее.
    // useLocation,
    // useNavigate,
    useParams
  } from "react-router-dom";  

function withRouter(Component) {
    function ComponentWithRouterProp(props) {

        let params = useParams();
        
        return (
            <Component
                {...props}
                router={{  params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {

    refreshProfile(){
        let userId = this.props.router.params.userId; //Определяем id пользователя на который щелкнули на странице пользователей
        
        if (!userId){ //Если перешли с главной, подставляем id текущего авторизованного пользователя.                
            userId=this.props.auth.id;
            //if (!userId) this.props.history.push("/profile")
        }
        this.props.getCurrentUserDataThunkCreator(userId)  
        this.props.getStatusThunkCreator(userId)     
    }

    componentDidMount(){
        this.refreshProfile()
    }    

    componentDidUpdate(prevProps){ //prevProps (предыдущие пропсы) есть у этой компоненты жизненного цикла по умолчанию
        debugger
        if (this.props.profile.userId != prevProps.profile.userId){ //Обновляем только если текущий id пользователя отличается от предыдущего.
           this.refreshProfile()
        }        
    }

    render() {
        
        return (
            <Profile {...this.props} 
                     profile={this.props.profile} 
                     status={this.props.status} 
                     updateStatus={this.props.updateStatusThunkCreator}
                     isOwner={!!this.props.profile.userId} //Двойное отрицание присвоит true вместо значения
            />
        )
    }
}

let mapStateToProps = (state) => {    
    return {
       profile: state.profilePage.profile, 
       status: state.profilePage.status,
       auth: state.auth,
    }
}

export default 
compose (
    connect(mapStateToProps,
        {
            setUserProfile,
            getCurrentUserDataThunkCreator,
            getStatusThunkCreator,
            updateStatusThunkCreator,
        }),
    withRouter,
    //withAuthRedirect,
)(ProfileContainer)
