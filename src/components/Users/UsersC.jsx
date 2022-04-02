
import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import styles from './Users.module.css';
import userPhoto from '../../assets/img/monkey.png';

class Users extends React.Component {

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
            
            let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize); //Определяем количество страниц

            let pages = [];
            for (let i = 1; i <= pagesCount; i++){
                pages.push(i);
            }

            return (
                <div> 
                    <div>
                        {pages.map(p => {
                            return <span className={this.props.currentPage === p && styles.selectedPage}
                            onClick={(e) => {this.onPageChanged(p) }}>{p} </span> 
                            //(e) - передача события onClick. Можно не писать.
                            //{p} - номер страницы; 
                            //{this.props.currentPage === p && styles.selectedPage} - если условие верное, то присвоить стиль
                        })}
                        
                    </div>      

                    {this.props.usersData.map(user => <div key={user.id}>
                        <span>
                            <div>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto} />
                            </div>
                            <div>
                                {user.followed
                                    ? <button onClick={() => { this.props.unfollow(user.id) }}> Follow </button>
                                    : <button onClick={() => { this.props.follow(user.id) }}> Unfollow </button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{"user.location.city"}</div>
                            </span>
                        </span>
                    </div>)}
                </div>
            )
        }
}

export default Users;