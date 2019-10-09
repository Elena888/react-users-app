import {combineReducers} from 'redux'
import { users, fetchError } from './UsersReducer'


export default combineReducers({
    users: users,
    usersError: fetchError
})