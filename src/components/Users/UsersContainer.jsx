import { connect } from "react-redux";
import { followActionCreator, unfollowActionCreator, setUsersActionCreator } from "../../redux/usersReducer";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => { 
            dispatch(followActionCreator(userID));
        },
        unfollow: (userID) => { 
            dispatch(unfollowActionCreator(userID));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        }
    }
}


export default connect (mapStateToProps, mapDispatchToProps)(Users);