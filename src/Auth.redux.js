import axios from 'axios'
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const USER_DATA = 'USER_DATA'
export function auth(state = {
    isAuth: false,
    user: '李云龙'
}, action) {
    switch (action.type) {
        case LOGIN:
            return { ...state,
                isAuth: true
            }
        case LOGOUT:
            return { ...state,
                isAuth: false
            }
        case USER_DATA:
            return {
                ...state,
                user: action.payload.user,
                age: action.payload.age,
                isAuth: true
            }
        default:
            return state
    }
}
export function login() {
    return {
        type: LOGIN
    }
}
export function logout() {
    return {
        type: LOGOUT
    }
}
export function getUserData() {
    return dispatch => {
        axios.get('/data').then(res => {
            if (res.status === 200) {
                console.log(res.data)
                dispatch(userData(res.data))
            }
        })
    }
}
export function userData(data) {
    return {
        type: USER_DATA,
        payload: data
    }
}