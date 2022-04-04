


import styles from './Users.module.css';
import userPhoto from '../../assets/img/monkey.png';

let Users = (props) => {
    
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize); //Определяем количество страниц

    let pages = [];
    for (let i = 1; i <= pagesCount; i++){
        pages.push(i);
    } 

    return (
        <div> 
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && styles.selectedPage}
                    onClick={(e) => {props.onPageChanged(p) }}>{p} </span> 
                    //(e) - передача события onClick. Можно не писать.
                    //{p} - номер страницы; 
                    //{this.props.currentPage === p && styles.selectedPage} - если условие верное, то присвоить стиль
                })}
                
            </div>      

            {props.usersData.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto} />
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