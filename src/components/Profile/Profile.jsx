import Autor from './Autor/Autor';
import NewPost from './MyPosts/NewPost/NewPost';
import Post from './MyPosts/Post/Post';
import classes from './Profile.module.css';
import ProfileHeader from './ProfileHeader/ProfileHeader';


const Profile = () => {

    let postData = [
        {id: 1, message: 'My first post'},
        {id: 2, message: 'Расскажу о муравьях'},
        {id: 3, message: 'И о снеговиках'}
    ]

    let postElement = postData.map (
        post => <Post message = {post.message}/>
    )

    return (
        <div>
            
                <ProfileHeader />
                <Autor />
                <NewPost />

                {postElement}

           
        </div>
    );
}

export default Profile;