
import React from 'react';

import { NavLink } from 'react-router-dom';

import styles from './Users.module.css';
import userPhoto from '../../assets/img/monkey.png';

let User = ({user, ...props}) => {

    return (
                   
            <div key={user.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto} />
                        </NavLink>

                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={props.followingInProgress.some(id => id === user.id)}    //метод some() проверяет удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.                        
                            onClick={() => { props.unfollowThunkCreator(user.id) }}> Follow </button>
                            : <button disabled={props.followingInProgress.some(id => id === user.id)} 
                            onClick={() => { props.followThunkCreator(user.id) }}> Unfollow </button>}
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
            </div>
        
    )
}

export default User;