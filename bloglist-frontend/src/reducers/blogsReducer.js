import {ac_setNotification_Text} from "./notificationTextReducer";
import useResource from "../hooks/useResources";

const blogsReducer = (state = [], action) => {

    switch (action.type) {
        case 'initBlogs':
            state = action.data;
            return state;
        case 'addBlog':
            state = [...state, action.data];
            return state;
        case 'likeBlog':
            const found = state.find(i => i.id === action.data);
            found.likes = found.likes + 1;
            return [...state];
        case 'deleteBlog':
            return state.filter(i => i.id !== action.data);
        default:
            return state;
    }
};

export const ac_InitBlogs = () => {
    return async (dispatch) => {
        try {
            let db = useResource('/api/blogs');
            const received = await db.getAll();
            const blogs = received.data;
            dispatch({
                type: 'initBlogs',
                data: blogs
            })
        } catch (exception) {
            console.log('Error Getting Blogs');

        }
    }
};

export const ac_createBlog = (config, newBlog, history) => {

    return async dispatch => {
        try {
            let db = useResource('/api/blogs');
            const receivedData = await db.post(newBlog, config);

            dispatch({
                type: 'addBlog',
                data: receivedData.data
            });

            dispatch(ac_setNotification_Text('Blog created. Taking you to your new blog', true));
            setTimeout(() => history.push(`/blogs/${receivedData.data.id}`), 2000);

        } catch (exception) {
            dispatch(ac_setNotification_Text('Error creating the blog', false));
        }

    }
};


export const ac_likeBlog = (blog) => {

    return async dispatch => {
        try {
            let db = useResource('/api/blogs');
            const newBlog = {...blog, likes: blog.likes + 1};
            await db.put(blog.id, newBlog);

            dispatch({
                type: 'likeBlog',
                data: blog.id
            });

        } catch (exception) {
            dispatch(ac_setNotification_Text('Error liking blog', false));
        }
    }
};

export const ac_deleteBlog = (config, id, history) => {
    return async dispatch => {
        let db = useResource('/api/blogs');
        try {
            await db.del(id, config);
            dispatch(ac_setNotification_Text('Blog deleted. Taking you back to homepage.', true));
            setTimeout(() => history.push('/home'), 2000);

            dispatch({
                type: 'deleteBlog',
                data: id
            });

        } catch (exception) {
            dispatch(ac_setNotification_Text('Error deleting blog', false));
        }
    }
};
export default blogsReducer;