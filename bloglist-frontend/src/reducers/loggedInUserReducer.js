import React from 'react'
import {ac_setNotification_Text} from "./notificationTextReducer";

const loggedInUseReducer = (state = null, action) => {
    switch (action.type) {
        case 'setUser':
            state = action.data;
            return state;

        case 'logout':
            window.localStorage.clear();
            state = null;
            return state;

        default:
            return state
    }
};


export const ac_setLoggedInUserFromLS = (data) => {
    return {
        type: 'setUser',
        data: data
    }
};

export const ac_logout = () => {
    return {
        type: 'logout',
    }
};

export const ac_login = (db, data) => {
    return async dispatch => {
        try {
            const returnedObject = await db.post(data);
            const returnResultData = returnedObject.data;
            window.localStorage.setItem('token', JSON.stringify(returnResultData));
            dispatch(ac_setLoggedInUserFromLS(returnedObject));
            dispatch(ac_setNotification_Text('Login Successful'));

        } catch (exception) {
            dispatch(ac_setNotification_Text('Error Logging in. Invalid username or password'))

        }
    }
};

export const ac_createUser = (db, newUser) => {
    return async dispatch => {
        try {
            await db.post(newUser);
            dispatch(ac_setNotification_Text('User Created.'));
        } catch (exception) {
            dispatch(ac_setNotification_Text('Error Creating user'));
        }
    }
};

export default loggedInUseReducer;