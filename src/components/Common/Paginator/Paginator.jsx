import styles from "./Paginator.module.css"

let Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize); //Определяем количество страниц

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                    onClick={(e) => { props.onPageChanged(p) }}>{p} </span>
                //(e) - передача события onClick. Можно не писать.
                //{p} - номер страницы; 
                //{this.props.currentPage === p && styles.selectedPage} - если условие верное, то присвоить стиль
            })}

        </div>
    )
}

export default Paginator