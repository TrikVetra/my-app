import React from "react";
import {connect} from "react-redux";
import { Navigate } from "react-router-dom"

import Profile from "./Profile";
import {
    setUserProfile,
    getCurrentUserDataThunkCreator,
} from "../../redux/profileReducer";

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
        
        console.log(this.props)
        let userId = this.props.router.params.userId; //Определяем id пользователя на который щелкнули на странице пользователей
        console.log(userId);
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
    }    

    render() {
        
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

//Это HOC который редиректит на другую страницу если пользователь не авторизован.
let AuthRedirectComponent = (props) => { 
    if (!props.isAuth) return <Navigate to="/login" />
    return <ProfileContainer {...props}/>
}

let mapStateToProps = (state) => {
    
    return {
       profile: state.profilePage.profile, 
       auth: state.auth,
       isAuth: state.auth.isAuth,       
    }
}

let WithUrlDataContainerComponent = withRouter (AuthRedirectComponent); //Обёртка для получения данных из URL
 
export default connect(mapStateToProps,
    {
        setUserProfile,
        getCurrentUserDataThunkCreator,
    }) (WithUrlDataContainerComponent); //Обёртка для получения данных из Store