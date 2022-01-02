import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.app_content}>
            <div className={classes.content_texture}>
                <img alt='texture' src='https://w-dog.ru/wallpapers/15/10/551748531899607/listya-kashtan-prozhilki-uzor.jpg'></img>
            </div>
            <div className='content_profile'>
                <div className='profile_ava'>
                    <img alt='hear' src='https://st.depositphotos.com/1784615/1327/i/600/depositphotos_13277814-stock-photo-curious-young-red-rabbit-isolated.jpg'></img>
                </div>
                <div className='profile_description'>
                    Это фото Рыжего зайца
                </div>
            </div>
            <div className='content_newPost'>
                <div className='newPost_field'>

                </div>
            </div>
            <div className='content_posts'>
                <div className={classes.item}>Post 1</div>
                <div className={classes.item}>Post 2</div>
                <div className={classes.item}>Post 3</div>
            </div>
        </div>
    );
}

export default Profile;