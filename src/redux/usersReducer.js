const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const FETCHING = 'FETCHING' //Fetching - получение данных.
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS'


let initialState = {
    isFetching: false,
    followingInProgress: [],
    pageSize: 30,
    totalUsersCount: 0,
    currentPage: 1,
    usersData: [
        // Данные приходят с сервера, поэтому тут не нужны //
        //{
        //     id: 1,
        //     photoURL: 'https://img.icons8.com/external-others-made-by-made/452/external-animals-zoo-others-made-by-made-58.png',
        //     followed: false, name: 'Tanya', status: 'Here', 
        //     location: { city: 'Вайтран', country: 'Скайрим' },
        // },
        // {
        //     id: 2,
        //     photoURL: 'https://img.icons8.com/external-others-made-by-made/452/external-animals-zoo-others-made-by-made-41.png',
        //     followed: false, name: 'Yan', status: 'There', 
        //     location: { city: 'Анвил', country: 'Обливион' },
        // },
        // {
        //     id: 3,
        //     photoURL: 'https://img.icons8.com/external-others-made-by-made/452/external-animals-zoo-others-made-by-made-72.png',
        //     followed: true, name: 'Dima', status: 'Bath', 
        //     location: { city: 'Вивек', country: 'Морровинд' },
        // },
    ],
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.userID) {
                        return { ...user, followed: true }
                    }
                    return user
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.userID) {
                        return { ...user, followed: false }
                    }
                    return user
                })
            }

        case SET_USERS:
            return { ...state, usersData: [...action.usersData]} //скопировать массив со старыми пользователями, добавить новых пользователей из action.usersData            

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.pageNumber} //скопировать массив со старыми пользователями, добавить новых пользователей из action.usersData            

        case SET_TOTAL_COUNT:
            return { ...state, totalUsersCount: action.totalCount} 

        case FETCHING:
            return { ...state, isFetching: action.isFetching} //У Димана isFetching

        case FOLLOWING_IN_PROGRESS:
            return { 
                ...state, 
                followingInProgress: action.isFetching 
                ? [...state.followingInProgress, action.userID] // дописываем id в конец массива
                : state.followingInProgress.filter(id => id != action.userID) //метод filter()создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции
            } 

        default:
            return state;
        
    }

}

//ActionCreators
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber})

export const setUsersCount = (totalCount) =>({type: SET_TOTAL_COUNT, totalCount})

export const follow = (userID) => ({ type: FOLLOW, userID }) 

export const unfollow = (userID) => ({ type: UNFOLLOW, userID}) 

export const setUsers = (usersData) => ({ type: SET_USERS, usersData}) 

export const toggleIsFetchig = (isFetching) => ({ type: FETCHING, isFetching})

export const toggleFollowing = (isFetching, userID) => ({type: FOLLOWING_IN_PROGRESS, isFetching, userID})



export default usersReducer;