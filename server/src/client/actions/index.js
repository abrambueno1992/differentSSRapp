import axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS';
export const ERROR = 'ERROR';

export const fetchUsersAction = () => async dispatch => {
    const res = await axios.get('http://react-ssr-api.herokuapp.com/users')
    .then(response => {
        dispatch({
            type: FETCH_USERS,
            payload: response
        })
    })
    .catch(err => {
        dispatch({
            type: ERROR,
            payload: err
        })
    })
}