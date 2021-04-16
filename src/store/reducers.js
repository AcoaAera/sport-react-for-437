import {
    combineReducers
} from 'redux';
import {
    addUserReducer
} from './adduser/reducers'
import {
    editUserReducer
} from './edituser/reducers'
import {
    allUserReducer
} from './alluser/reducers'

export default combineReducers({
    addUser: addUserReducer,
    editUser: editUserReducer,
    allUser: allUserReducer
});