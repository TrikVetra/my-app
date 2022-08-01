
import axios from 'axios';

const instance = axios.create ({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true ,
    headers: {"API-KEY": "ea125483-9823-4673-ac8e-83b5b20ab3a4"},
});

export const usersAPI = {
    getUsers (currentPage = 1,pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)  
        .then (response => response.data); //Возвращаем только response.data, а не весь response      
    },
    unfollowUser (id){
        return instance.delete(`follow/${id}`)
        .then (response => response.data); //Возвращаем только response.data, а не весь response   
    },
    followUser (id){
        return instance.post(`follow/${id}`)
        .then (response => response.data) //Возвращаем только response.data, а не весь response   
    }
}

export const authAPI = {
    getCurrentUser () {
        return instance.get(`/auth/me`)
    }
}

export const profileAPI = {
    getCurrentUserData (id) {
        return instance.get(`profile/`+ id)
    },
    getStatus (id) {        
        return instance.get(`profile/status/` + id)
    },
    updateStatus (status) {
        return instance.put(`profile/status/`, {status})
    },
    savePhoto(file) {
        const formData = new FormData()
        formData.append("image", file)
        return instance.put(
            `profile/photo`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
    }
}

//API для логина
export const loginAPI = { 
    login (email, password, rememberMe = false) { 
        return instance.post(`/auth/login`, {email, password, rememberMe})
    }, 
    logout () {
        return instance.delete(`/auth/login`)
    }
}


