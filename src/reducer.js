import {
    combineReducers
} from 'redux';
import {
    user
} from './redux/user.redux.js';
import {
    chatuser
}
from './redux/chatuser.redux.js';
export default combineReducers({
    user,
    chatuser
})