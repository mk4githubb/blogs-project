import useResource from "../hooks/useResources";

const usersReducer = (state = [], action) => {

    switch (action.type) {
        case 'initUsers':
            state = action.data;
            return state;
        default:
            return state;
    }
};

export const ac_initUsers = () => {
    return async dispatch => {
        try {
            const db = useResource('/api/users');
            const received = await db.getAll();
            const users = received.data;
            dispatch({
                type: 'initUsers',
                data: users
            })
        } catch (exception) {
            console.log('Error Getting users');

        }
    }
};

export default usersReducer;