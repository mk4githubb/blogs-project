import useResource from "../hooks/useResources";
import {ac_setNotification_Text} from "./notificationTextReducer";


export const ac_initPageViews = () => {
    return async dispatch => {
        try {
            const viewsDB = useResource('/api/pageviews');
            const views = await viewsDB.getAll();
            dispatch({
                type: 'initViews',
                data: views.data.pageViews
            })
        } catch (exception) {
            dispatch(ac_setNotification_Text('Database connection could not be established', false))
        }
    }
};

export const ac_incrementPageViews = () => {

    return async dispatch => {
        try {
            const viewsDB = useResource('/api/pageviews');
            await viewsDB.post();
            dispatch({
                type: 'increment'
            })
        } catch (exception) {
            dispatch(ac_setNotification_Text('Database connection could not be established', false))
        }
    }
};

const pageViewsReducer = (state = 0, action) => {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'initViews':
            state = action.data;
            return state;
        default:
            return state;
    }
};

export default pageViewsReducer;