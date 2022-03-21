

import styles from './Users.module.css';

const Users = (props) => {

    if (props.usersData.length === 0) {
    props.setUsers (
        [
            {
                id: 1,
                photoURL: 'https://img.icons8.com/external-others-made-by-made/452/external-animals-zoo-others-made-by-made-58.png',
                followed: false, name: 'Tanya', status: 'Here', 
                location: { city: 'Вайтран', country: 'Скайрим' },
            },
            {
                id: 2,
                photoURL: 'https://img.icons8.com/external-others-made-by-made/452/external-animals-zoo-others-made-by-made-41.png',
                followed: false, name: 'Yan', status: 'There', 
                location: { city: 'Анвил', country: 'Обливион' },
            },
            {
                id: 3,
                photoURL: 'https://img.icons8.com/external-others-made-by-made/452/external-animals-zoo-others-made-by-made-72.png',
                followed: true, name: 'Dima', status: 'Bath', 
                location: { city: 'Вивек', country: 'Морровинд' },
            },
        ],
    )
    }

    return (
        <div>
            {props.usersData.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photoURL} className={styles.userPhoto} />
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
                        <div></div>
                        <div>{user.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )

}

export default Users;