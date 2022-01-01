const Profile = () => {
    return (
        <div className='app-content'>
            <div className='content-texture'>
                <img alt='texture' src='https://w-dog.ru/wallpapers/15/10/551748531899607/listya-kashtan-prozhilki-uzor.jpg'></img>
            </div>
            <div className='content-profile'>
                <div className='profile-ava'>
                    <img alt='hear' src='https://st.depositphotos.com/1784615/1327/i/600/depositphotos_13277814-stock-photo-curious-young-red-rabbit-isolated.jpg'></img>
                </div>
                <div className='profile-description'>
                    Это фото Рыжего зайца
                </div>
            </div>
            <div className='content-newPost'>
                <div className='newPost-field'>

                </div>
            </div>
            <div className='content-posts'>
                <div>Post 1</div>
                <div>Post 2</div>
                <div>Post 3</div>
            </div>
        </div>
    );
}

export default Profile;