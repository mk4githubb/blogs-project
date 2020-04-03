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
    return async dispatch => {
        try {
            dispatch({
                type: 'setUser',
                data: data
            });

            dispatch(ac_setNotification_Text(`Hello ${data.username}, Welcome back!`, true))
        } catch (e) {
            dispatch(ac_setNotification_Text('Please login in.', false))
        }

    }
};

export const ac_logout = () => {
    return async dispatch => {
        try {
            dispatch({
                type: 'logout',
            });

            dispatch(ac_setNotification_Text('Logged Out Successfully.', true))
        } catch (e) {
            dispatch(ac_setNotification_Text('Logged Out Successfully.', false))
        }

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
            dispatch(ac_setNotification_Text('Login Successful', true));

        } catch (exception) {
            dispatch(ac_setNotification_Text('Error Logging in. Invalid username or password', false))
        }
    }
};

export const ac_createUser = (newUser, history) => {
    return async dispatch => {
        try {
            const db = useResource('/api/users');
            await db.post(newUser);
            dispatch(ac_setNotification_Text(`User ${newUser.username} Created. Please Login. Taking you to the login page.`, true));
            history.push('/login');
            setTimeout(() => history.push('/login'), 2000);
        } catch (exception) {
            dispatch(ac_setNotification_Text('Error Creating user. Either Database connection error or Try Picking a different username.', false));
        }
    }
};

export default loggedInUseReducer;