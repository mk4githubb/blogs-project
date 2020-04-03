export const ac_setUserSearch_Text = (text) => {
    return async dispatch => {
        dispatch({
            type: 'setUserSearchText',
            data: text
        });
    }
};


const userSearchTextReducer = (state = null, action) => {
    switch (action.type) {
        case 'setUserSearchText':
            if (action.data === '') {
                return state = null;
            }
            state = action.data;
            return state;

        case 'removeSearchText':
            state = null;
            return state;

        default:
            return state;
    }
};

export default userSearchTextReducer;