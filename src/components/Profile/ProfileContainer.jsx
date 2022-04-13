import React from "react";
import axios from "axios";
import {connect} from "react-redux";

import Profile from "./Profile";
import {setUserProfile} from "../../redux/profileReducer";

import { //В React6 вместо import withRouter нужно импортировать вот так... почему так сложно пока не совсем понятно.
    useLocation,
    useNavigate,
    useParams
  } from "react-router-dom";
  
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}



class ProfileContainer extends React.Component {

    componentDidMount(){
        //this.props.toggleIsFetchig(true); //отмечаем, что передаются данные чтобы отрисовать прелоадер
        
        let userId = this.props.router.params.userId; 
        console.log(userId);
        if (!userId){
            userId="2";
        }      
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
            .then(response => {                
            this.props.setUserProfile(response.data);                
            }
        );            
    }
    

    render() {
        
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => {
    
    return {
       profile : state.profilePage.profile,        
    }
}

let WithUrlDataContainerComponent = withRouter (ProfileContainer); //Обёртка для получения данных из URL
 
export default connect(mapStateToProps,{setUserProfile}) (WithUrlDataContainerComponent); //Обёртка для получения данных из Store