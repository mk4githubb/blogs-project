import {createStore, combineReducers, applyMiddleware} from "redux";
import blogsReducer from "../reducers/blogsReducer";
import loggedInUseReducer from "../reducers/loggedInUserReducer";
import notificationTextReducer from "../reducers/notificationTextReducer";
import searchTextReducer from "../reducers/searchTextReducer";
import thunk from "redux-thunk";
import usersReducer from "../reducers/usersReducer";
import userSearchTextReducer from "../reducers/userSearchReducer";


const combinedReducer = combineReducers({
   blogs:blogsReducer,
   loggedInUser:loggedInUseReducer,
   notificationText:notificationTextReducer,
   searchText:searchTextReducer,
   users:usersReducer,
   userSearchText:userSearchTextReducer
});

const store = createStore(combinedReducer, applyMiddleware(thunk));

export default store;