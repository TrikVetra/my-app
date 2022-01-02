import classes from './Autor.module.css';

const Autor = () => {
    return (

        <div className={classes.autor}>
            <img alt='hear' src='https://st.depositphotos.com/1784615/1327/i/600/depositphotos_13277814-stock-photo-curious-young-red-rabbit-isolated.jpg'></img>

            <div className={classes.autor_description}>
                Это фото Рыжего зайца
            </div>
        </div>
    );
}

export default Autor;