import { connect } from "react-redux";
import { 
    followActionCreator, 
    unfollowActionCreator, 
    setUsersActionCreator, 
    setCurrentPageActionCreator,
    setUsersCountActionCreator
} from "../../redux/usersReducer";
import Users from "./UsersC";

let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
            dispatch(setUsersActionCreator(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageActionCreator(pageNumber));
        },
        setUsersCount: (totalCount) => {
            dispatch(setUsersCountActionCreator(totalCount));
        },
    }
}


export default connect (mapStateToProps, mapDispatchToProps)(Users);