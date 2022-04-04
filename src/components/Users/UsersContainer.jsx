import { connect } from "react-redux";
import { 
    followActionCreator, 
    unfollowActionCreator, 
    setUsersActionCreator, 
    setCurrentPageActionCreator,
    setUsersCountActionCreator
} from "../../redux/usersReducer";

import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import Users from './Users';

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
    
            https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}
            https://social-network.samuraijs.com/api/1.0/users?page=2&count=3
            */
    
        componentDidMount () {        
            let page=this.props.currentPage;
            let count=this.props.pageSize;
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                let data = response.data.items;
                this.props.setUsers(data);
                this.props.setUsersCount(response.data.totalCount)
                }
            );
    
        }
    
        onPageChanged = (pageNumber) => {
            this.props.setCurrentPage(pageNumber);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
                .then(response => {
                let data = response.data.items;
                this.props.setUsers(data);
                }
            );
        }    
    
            render()
            {   
                return <Users totalUsersCount = {this.props.totalUsersCount}
                              pageSize = {this.props.pageSize}
                              currentPage = {this.props.currentPage}
                              onPageChanged = {this.onPageChanged}
                              usersData = {this.props.usersData}
                              unfollow = {this.props.unfollow}
                              follow = {this.props.follow}
                              />                          
            }       
    }

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

export default connect (mapStateToProps, mapDispatchToProps)(UsersContainer);