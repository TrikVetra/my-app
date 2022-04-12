import PreloaderImg from '../../assets/img/preloader.gif'
import style from './Preloader.module.css'


let Preloader = (props) => {
    return (
        <div className={style.preloaderStyle}> 
            <img src={PreloaderImg}/>
        </div>
        
    )
}

export default Preloader;


