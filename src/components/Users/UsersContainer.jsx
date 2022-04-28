import { connect } from "react-redux";
import { 
    follow, 
    unfollow, 
    setUsers, 
    setCurrentPage,
    setUsersCount,
    toggleIsFetchig,
    toggleFollowing,
    getUsersThunkCreator,
} from "../../redux/usersReducer";

import React from 'react';
import axios from 'axios';
import Users from './Users';
import Preloader from '../Common/Preloader';
import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component {

    /*
            Query Parameters
            
            count: (integer - default: 10 - maximum: 100)
            page size (how many items will be returned in response)
    
            page: (integer - default: 1)
            number of portion of items
    
            term: (string)
            user name string for searching
    
            friend: (boolean)
            if true, then find only followed users, false - only not followed users, if omit parameter - all users
    
            example:
            https://social-network.samuraijs.com/api/1.0/users?page=2&count=3
            */
    
        componentDidMount () {   
            this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize);     
            // this.props.toggleIsFetchig(true); //отмечаем, что передаются данные чтобы отрисовать прелоадер
            // usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
            //     this.props.setUsers(data.items);
            //     this.props.setUsersCount(data.totalCount);
            //     this.props.toggleIsFetchig(false);
            //     }
            // );    
        }
    
        onPageChanged = (pageNumber) => {
            this.props.setCurrentPage(pageNumber);
            this.props.toggleIsFetchig(true);
            usersAPI.getUsers(pageNumber,this.props.pageSize).then(data => {
                this.props.setUsers(data.items);
                this.props.toggleIsFetchig(false);
                }
            );
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
                        toggleFollowing = {this.props.toggleFollowing}
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
        setUsers,
        setCurrentPage,
        setUsersCount,
        toggleIsFetchig,
        toggleFollowing,
        getUsersThunkCreator,
    }
    )(UsersContainer);