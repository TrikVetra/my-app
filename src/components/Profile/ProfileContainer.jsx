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
        // let location = useLocation();
        // let navigate = useNavigate();
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

    componentDidMount(){
        //this.props.toggleIsFetchig(true); //отмечаем, что передаются данные чтобы отрисовать прелоадер
        
        
        let userId = this.props.router.params.userId; //Определяем id пользователя на который щелкнули на странице пользователей
        
        if (!userId){ //Если перешли с главной, подставляем id текущего авторизованного пользователя.
            userId=this.props.auth.id;
        }
        this.props.getCurrentUserDataThunkCreator(userId)  
        // profileAPI.getCurrentUserData(userId)    
        // // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
        //      .then(response => {                
        //      this.props.setUserProfile(response.data);                
        //      }
        // ); 
            this.props.getStatusThunkCreator(userId)
        
    }    

    render() {
        
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatusThunkCreator}/>
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
