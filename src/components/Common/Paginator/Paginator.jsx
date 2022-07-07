import styles from "./Paginator.module.css"
import React, { useState } from "react"

let Paginator = (props) => {
    let portionSize = props.portionSize
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize); //Определяем количество страниц

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div>
            {portionNumber > 1 &&
                <button onClick={() => { setPortionNumber(portionNumber - 1) }}> - </button>
            }
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <span className={props.currentPage === p && styles.selectedPage}
                        onClick={(e) => { props.onPageChanged(p) }}>{p} </span>
                    //(e) - передача события onClick. Можно не писать.
                    //{p} - номер страницы; 
                    //{this.props.currentPage === p && styles.selectedPage} - если условие верное, то присвоить стиль
                })}
            {portionCount > portionNumber &&
                <button onClick={() => { setPortionNumber(portionNumber + 1) }}> + </button>
            }
        </div>
    )
}

export default Paginator