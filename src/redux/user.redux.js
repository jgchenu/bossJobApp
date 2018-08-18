import axios from 'axios';
import {
    getRedirectPath
} from './util.js'
import {
    Toast
} from 'antd-mobile'


const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOAD_DATA = 'LOAD_DATA'
const initState = {
    redirectTo: '',
    isAuth: false,
    msg: '',
    user: '',
    pwd: '',
    type: ''
}

export function user(state = initState, action) {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return { ...state,
                msg: '',
                isAuth: true,
                redirectTo: getRedirectPath(action.payload),
                ...action.payload
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                msg: '',
                redirectTo: getRedirectPath(action.payload),
                isAuth: true,
                ...action.payload
            }
        case LOAD_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true
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
export function getUserInfo() {
    return dispatch => {
        axios.get("/user/info").then(res => {
            console.log(res)
            if (res.data.code === 200) {
                dispatch(loadData(res.data.data))
            } else if (res.data.code === 201) {
                Toast.fail('没有登录', 2, () => {
                    this.props.history.push("/login");
                });
            }

        });
    }

}

function loadData(data) {
    return {
        type: LOAD_DATA,
        payload: data
    }
}

function loginSuccess(data) {
    return {
        type: LOGIN_SUCCESS,
        payload: data
    }
}

function registerSuccess(data) {
    return {
        type: REGISTER_SUCCESS,
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
                dispatch(loginSuccess(res.data.data))
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
                dispatch(registerSuccess({
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