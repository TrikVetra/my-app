

import axios from 'axios';
import styles from './Users.module.css';
import userPhoto from '../../assets/img/monkey.png';

const Users = (props) => {


    //запрос на сервак
    let getUsers = () => {    
    if (props.usersData.length === 0) {
        return axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            
            let data = response.data.items; 
            props.setUsers(data);
        }
    );
    }
}

    return (
        <div>
            <div>
                <button onClick={getUsers}>Отобразить пользователей</button>
            </div>
            {props.usersData.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photos.small != null ? user.photos.small: userPhoto} className={styles.userPhoto} />
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => { props.unfollow(user.id) }}> Follow </button>
                            : <button onClick={() => { props.follow(user.id) }}> Unfollow </button>}

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

export default Users;