import { connect } from "react-redux";
import { 
    follow, 
    unfollow,
    setCurrentPage,
    toggleFollowing,
    requestUsersThunkCreator,
    unfollowThunkCreator,
    followThunkCreator,
} from "../../redux/usersReducer";

import React from 'react';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import { 
    getCurrentPage, 
    getFollowingInProgress, 
    getIsFetching, 
    getPageSize, 
    gettotalItemsCount, 
    getUsers 
} from "../../redux/usersSelectors";


class UsersContainer extends React.Component {
    
        componentDidMount () {   
            this.props.requestUsersThunkCreator(this.props.currentPage,this.props.pageSize)
        }
    
        onPageChanged = (pageNumber) => {
            this.props.requestUsersThunkCreator(pageNumber,this.props.pageSize)
            this.props.setCurrentPage(pageNumber);
        }   
    
            render()
            
            {   
                return <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users  totalItemsCount = {this.props.totalItemsCount}
                        pageSize = {this.props.pageSize}
                        currentPage = {this.props.currentPage}
                        onPageChanged = {this.onPageChanged}
                        usersData = {this.props.usersData}
                        unfollow = {this.props.unfollow}
                        follow = {this.props.follow}
                        followingInProgress = {this.props.followingInProgress}
                        unfollowThunkCreator = {this.props.unfollowThunkCreator}
                        followThunkCreator = {this.props.followThunkCreator}
                              />                                
                </>                  
            }       
    }

let mapStateToProps = (state) => {
    return {
        usersData: getUsers(state),
        pageSize: getPageSize(state),
        totalItemsCount: gettotalItemsCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

// -------connect цепляет "dispatch" за кадром, если вторым параметром передать объект, как показано ниже. 
// -------по сути это будет аналогично коду, приведённому тут.
//
//let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userID) => { 
//             dispatch(followActionCreator(userID));
//         },
//         unfollow: (userID) => { 
//             dispatch(unfollowActionCreator(userID));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersActionCreator(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageActionCreator(pageNumber));
//         },
//         setUsersCount: (totalCount) => {
//             dispatch(setUsersCountActionCreator(totalCount));
//         },
//         toggleIsFetchig: (isFetching) => {
//             dispatch(toggleIsFetchigActionCreator(isFetching));
//         }
//     }
// }

export default connect (mapStateToProps, 
    { 
        //если к конекту пришла не функция, а объёкт, то он сам делает dispatch и т.д. (см закомментированный код выше.)
        //если Action Creator ы называются иначе, чем передаваемые функции, надо писать follow:followActionCreator,
        follow,        
        unfollow,
        setCurrentPage,
        toggleFollowing,
        requestUsersThunkCreator,
        followThunkCreator,
        unfollowThunkCreator,
    }
    )(UsersContainer);