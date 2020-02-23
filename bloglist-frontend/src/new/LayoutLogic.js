import useResource from "../hooks/useResources";
import React, {useEffect} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import MasterContainer from "./components/containers/MasterContainer";
import {Segment} from "semantic-ui-react";
import BlogsContainer from "./components/Blogs/BlogConatiner";
import {ac_setNotification_Text} from "../reducers/notificationTextReducer";
import {ac_setLoggedInUserFromLS} from "../reducers/loggedInUserReducer";
import {ac_InitBlogs} from "../reducers/blogsReducer";
import {ac_initUsers} from "../reducers/usersReducer";
import {connect} from 'react-redux';
import LandingPage from "./r-home/LandingPage";
import RouteBlogs from "./r-blogs/r-blogs";


const LayoutLogic = (props) => {

    const blogsDB = useResource('http://localhost:3003/api/blogs');
    const usersDB = useResource('http://localhost:3003/api/users');

    useEffect(() => {
        const alreadyLoggedInUser = window.localStorage.getItem('token');

        if (alreadyLoggedInUser) {
            let parsed = JSON.parse(alreadyLoggedInUser);
            props.setLoggedInUser(parsed);
        }

        props.initBlogs(blogsDB);
        props.initUsers(usersDB);

    }, []);

    return(
        <Router>
            <Route exact path={'/'} render={() => <LandingPage/>} />
            <Route path={'/blogs'} render={() => <RouteBlogs/>} />
        </Router>
    )
};

const mapStateToProps = (state)=>{
    return{
        blogs:state.blogs,
        loggedInUser:state.loggedInUser,
        notificationText:state.notificationText,
        users:state.users
    }
};

const mapDispatchToProps = (dispatch)=> {
    return{
        setNotificationText:(data) => dispatch(ac_setNotification_Text(data)),
        setLoggedInUser:(data)=>dispatch(ac_setLoggedInUserFromLS(data)),
        initBlogs: (db) => dispatch(ac_InitBlogs(db)),
        initUsers:(db)=> dispatch(ac_initUsers(db))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LayoutLogic);