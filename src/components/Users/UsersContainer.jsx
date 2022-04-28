import { connect } from "react-redux";
import { 
    follow, 
    unfollow,
    setCurrentPage,
    toggleFollowing,
    getUsersThunkCreator,
    unfollowThunkCreator,
    followThunkCreator,
} from "../../redux/usersReducer";

import React from 'react';
import Users from './Users';
import Preloader from '../Common/Preloader';
import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component {
    
        componentDidMount () {   
            this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)
        }
    
        onPageChanged = (pageNumber) => {
            this.props.getUsersThunkCreator(pageNumber,this.props.pageSize)
            this.props.setCurrentPage(pageNumber);
            // this.props.toggleIsFetchig(true);
            // usersAPI.getUsers(pageNumber,this.props.pageSize).then(data => {
            //     this.props.setUsers(data.items);
            //     this.props.toggleIsFetchig(false);
            //     }
            // );
        }   
    
            render()
            
            {   
                return <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users  totalUsersCount = {this.props.totalUsersCount}
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
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
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
        getUsersThunkCreator,
        followThunkCreator,
        unfollowThunkCreator,
    }
    )(UsersContainer);