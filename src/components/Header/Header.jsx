import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classes.app_header}>
            <img alt='fox' src='https://st2.depositphotos.com/1003536/6753/v/600/depositphotos_67531781-stock-illustration-fox-icon-illustration-and-element.jpg'></img>
            <div className={classes.loginBlock}>
                {props.isAuth ? props.login : <NavLink to='/login'> Логин </NavLink>}
                
        
            </div>
        </header>
    );
}

export default Header;