export const FETCH_USERS = 'FETCH_USERS';
export const ERROR = 'ERROR';

export const fetchUsersAction = () => async (dispatch, getState, api) => {
    const res = await api.get('/users')
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
};

export const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';
export const fetchCurrentUser = () => async  (dispatch, getState, api) => {
    const res = await api.get('/current_user')
    
    .then(response => {
        dispatch({
            type: FETCH_CURRENT_USER,
            payload: response
        })
    })
    .catch(err => {
        dispatch({
            type: ERROR,
            payload: err
        })
    })
};