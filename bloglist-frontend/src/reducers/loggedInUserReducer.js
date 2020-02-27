import {ac_setNotification_Text} from "./notificationTextReducer";
import useResource from "../hooks/useResources";

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

export const ac_login = (data) => {
    return async dispatch => {
        try {
            const db = useResource('/api/login');
            const returnedObject = await db.post(data);
            const returnResultData = returnedObject.data;
            window.localStorage.setItem('token', JSON.stringify(returnResultData));
            dispatch(ac_setLoggedInUserFromLS(returnResultData));
            dispatch(ac_setNotification_Text('Login Successful'));

        } catch (exception) {
            dispatch(ac_setNotification_Text('Error Logging in. Invalid username or password'))
        }
    }
};

export const ac_createUser = (newUser, history) => {
    return async dispatch => {
        try {
            const db = useResource('/api/users');
            await db.post(newUser);
            dispatch(ac_setNotification_Text(`User -${newUser.username} Created. Please Login. Taking you to the login page.`));
            history.push('/login');
            setTimeout(() => history.push('/login'), 2000);
        } catch (exception) {
            dispatch(ac_setNotification_Text('Error Creating user'));
        }
    }
};

export default loggedInUseReducer;