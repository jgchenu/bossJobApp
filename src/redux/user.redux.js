import axios from 'axios';
import {
    getRedirectPath
} from './util.js'
import history from '../router/history'
import {Toast} from 'antd-mobile'
const ERROR_MSG = 'ERROR_MSG';
const AUTH_SUCCESS = 'AUTH_SUCCESS';
const LOAD_DATA = 'LOAD_DATA'
const initState = {
    redirectTo: '',
    msg: '',
    user: '',
    pwd: '',
    type: ''
}

export function user(state = initState, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                msg: '',
                redirectTo: getRedirectPath(action.payload),
                ...action.payload
            }
        case LOAD_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true,
                redirectTo: getRedirectPath(action.payload)
            }
        case ERROR_MSG:
            return {
                ...state,
                isAuth: false,
                msg: action.msg
            }
        default:
            return state
    }
}
export function update(data) {
    return dispatch => {
        axios.post('/user/update', data).then(res => {
            console.log(res)
            if (res.data.code === 200) {
                dispatch(authSuccess(res.data.data))
            }
        })
    }
}

export function loadData() {
    return dispatch => {
        axios.get("/user/info").then(res => {
            console.log(res)
            if (res.data.code === 200) {
               dispatch(infoData(res.data.data))
            } else if (res.data.code === 201) {
                Toast.loading('没有登录', 4);
                history.push('/login')
            }
        });
    }


}

function infoData(data) {
    return {
        type: LOAD_DATA,
        payload: data
    }
}

function authSuccess(data) {
    return {
        type: AUTH_SUCCESS,
        payload: data
    }
}

function errorMsg(msg) {
    return {
        type: ERROR_MSG,
        msg
    }
}

export function login({
    user,
    pwd
}) {
    if (!user || !pwd) {
        return errorMsg('用户密码必须输入')
    }
    return dispatch => {
        axios.post('/user/login', {
            user,
            pwd
        }).then(res => {
            if (res.status === 200 && res.data.code === 200) {
                console.log(res)
                dispatch(authSuccess(res.data.data))
            }
        })
    }
}

export function register({
    user,
    pwd,
    repeatpwd,
    type
}) {
    if (!user || !pwd || !type) {
        return errorMsg('用户名密码必须输入');
    }
    if (pwd !== repeatpwd) {
        return errorMsg('密码和确认密码不同');
    }
    return dispatch => {
        axios.post('/user/register', {
            user,
            pwd,
            type
        }).then(res => {
            console.log(res)
            if (res.status === 200 && res.data.code === 200) {
                dispatch(authSuccess({
                    user,
                    pwd,
                    type
                }))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    }

}