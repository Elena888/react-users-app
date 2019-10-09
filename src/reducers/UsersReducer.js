import _ from 'lodash'
import {DELETE_USER, EDIT_USER, FETCH_ERROR, FETCH_USERS} from "../actions/types";

export const users = (state = {}, action) => {
    switch (action.type){
        case FETCH_USERS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case DELETE_USER:
            return _.omit(state, action.payload);
        case EDIT_USER:
            return {...state, [action.payload.id]: action.payload };
        default:
            return state
    }
};

export const fetchError = (state = false, action) =>{
    switch (action.type) {
        case FETCH_ERROR:
            return action.hasError;

        default:
            return state;
    }
};