import { connect } from "react-redux";
import { 
    follow, 
    unfollow, 
    setUsers, 
    setCurrentPage,
    setUsersCount,
    toggleIsFetchig,
} from "../../redux/usersReducer";

import React from 'react';
import axios from 'axios';
import Users from './Users';
import Preloader from '../Common/Preloader';


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
            this.props.toggleIsFetchig(true); //отмечаем, что передаются данные чтобы отрисовать прелоадер
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                let data = response.data.items;
                this.props.setUsers(data);
                this.props.setUsersCount(response.data.totalCount);
                this.props.toggleIsFetchig(false);
                }
            );    
        }
    
        onPageChanged = (pageNumber) => {
            this.props.setCurrentPage(pageNumber);
            this.props.toggleIsFetchig(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
                .then(response => {
                let data = response.data.items;
                this.props.setUsers(data);
                this.props.toggleIsFetchig(false);
                }
            );
        }    

        
    
            render()
            
            {   
                return <>
                {/* <img src = {Preloader}/> */}
                {/* {console.log(this.props)} */}
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount = {this.props.totalUsersCount}
                              pageSize = {this.props.pageSize}
                              currentPage = {this.props.currentPage}
                              onPageChanged = {this.onPageChanged}
                              usersData = {this.props.usersData}
                              unfollow = {this.props.unfollow}
                              follow = {this.props.follow}
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
    }
}

// let mapDispatchToProps = (dispatch) => {
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
    }
    )(UsersContainer);