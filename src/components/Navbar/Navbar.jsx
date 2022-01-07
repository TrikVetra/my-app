
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={classes.app_nav}>
            <div className={classes.item}>
                <a href = '/profile'>Profile</a>
            </div>
            <div className={classes.item}>
                <a href='/dialogsggg'>Message</a>
            </div>
            <div className={classes.item}>
                <a>News</a>
            </div>
        </nav>
    );
}

export default Navbar;