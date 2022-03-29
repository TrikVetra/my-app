
import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import styles from './Users.module.css';
import userPhoto from '../../assets/img/monkey.png';

class Users extends React.Component {

    //запрос на сервак
    getUsers = () => {
        if (this.props.usersData.length === 0) {
            return axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {

                let data = response.data.items;
                this.props.setUsers(data);
            }
            );
        }
    }

        render()
        {
            return (
                <div>
                    <div>
                        <button onClick={this.getUsers}>Отобразить пользователей</button>
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