export const getUsers = (state) => {
    return state.usersPage.usersData
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const gettotalItemsCount = (state) => {
    return state.usersPage.totalItemsCount
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}