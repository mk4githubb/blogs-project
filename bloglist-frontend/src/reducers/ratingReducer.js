import useResource from "../hooks/useResources";
import {ac_setNotification_Text} from "./notificationTextReducer";

const ratingReducer = (state = {loadedOnce: false, visible: false}, action) => {
    switch (action.type) {
        case 'initRated':
            state = action.data;
            return state;
        case 'setRatedON':
            state = action.data;
            return state;
        case 'setRatedOFF':
            state = action.data;
            return state;
        default:
            return state;
    }
};

export const ac_Rating_Now = (rating) => {
    return async dispatch => {
        try {
            const db = useResource('/api/ratings');
            const returnedData = await db.post({rating: rating});

            dispatch(ac_setRated_OFF());
            dispatch(ac_setNotification_Text(`You gave the website ${returnedData.data.rating} stars! Thank you.`, true))
        } catch (exception) {
            dispatch(ac_setNotification_Text('Error connecting to the database.', false))
        }
    }
};

export const ac_setRated_ON = () => {
    return {
        type: 'setRatedON',
        data: {
            loadedOnce: true,
            visible: true
        }
    }
};

export const ac_setRated_OFF = () => {
    return {
        type: 'setRatedOFF',
        data: {
            loadedOnce: true,
            visible: false
        }
    }
};

export default ratingReducer;