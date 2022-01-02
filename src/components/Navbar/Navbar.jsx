
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={classes.app_nav}>
            <div className={classes.item}>
                <a>Profile</a>
            </div>
            <div className={classes.item}>
                <a>Message</a>
            </div>
            <div className={classes.item}>
                <a>Users</a>
            </div>
        </nav>
    );
}

export default Navbar;