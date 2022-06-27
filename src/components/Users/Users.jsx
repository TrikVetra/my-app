
import React from 'react';
import Paginator from '../Common/Paginator/Paginator';
import User from './User'

let Users = (props) => {

    return (
        <div>            
            <Paginator currentPage = {props.currentPage} 
                       onPageChanged = {props.onPageChanged}
                       totalUsersCount = {props.totalUsersCount}
                       pageSize = {props.pageSize}
            />
            {props.usersData.map(user => <User followingInProgress = {props.followingInProgress}
                                               unfollowThunkCreator = {props.unfollowThunkCreator}
                                               followThunkCreator = {props.followThunkCreator}
                                               user = {user}/>)}
        </div>
    )
}

export default Users;