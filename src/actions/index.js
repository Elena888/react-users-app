import axios from 'axios'
import {FETCH_ERROR, FETCH_USERS, DELETE_USER, EDIT_USER} from './types'

const url = 'https://reqres.in/api/users';

export const fetchError = (bool) =>{
    return {
        type: FETCH_ERROR,
        hasError: bool
    };
};

export const fetchUsers = () => async dispatch => {
    try{
        const response = await axios.get(url);
        const data = response.data.data;
        dispatch({
            type: FETCH_USERS,
            payload: data
        })
    }catch (e) {
        dispatch(fetchError(true))
    }

};

export const deleteUser = (id) => async dispatch => {
    await axios.delete(`${url}/${id}`);
    dispatch({
        type: DELETE_USER,
        payload: id
    })
};

export const editUser = (id, formValues) => async dispatch => {
    const response = await axios.put(`${url}/${id}`, formValues);
    dispatch({
        type: EDIT_USER,
        payload: response.data
    });
};