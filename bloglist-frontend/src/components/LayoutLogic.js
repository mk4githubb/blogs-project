import useResource from "../hooks/useResources";
import React, {useEffect} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {ac_setNotification_Text} from "../reducers/notificationTextReducer";
import {ac_setLoggedInUserFromLS} from "../reducers/loggedInUserReducer";
import {ac_InitBlogs} from "../reducers/blogsReducer";
import {ac_initUsers} from "../reducers/usersReducer";
import {connect} from 'react-redux';
import LandingPage from "./r-home/LandingPage";
import RouteBlogs from "./r-blogs/r-blogs";
import RouteUsers from "./r-users/r-users";
import About from "./r-about/r-about";
import RouteLogin from "./r-login/r-login";
import RouteSignup from "./r-signup/r-signup";
import RoutesOneBlog from "./r-blogs:id/r-blogs:id";
import RoutesOneUser from "./r-users:id/r-users:id";
import RouteCreateBlog from "./r-createBlog/r-createBlog";


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

    const findUserById = id => props.users.find(user => user.id == id);
    const findBlogById = id => props.blogs.find(blog => blog.id == id);

    return(
        <Router>
            <Route exact path={'/'} render={() => <LandingPage/>} />
            <Route exact path={'/home'} render={() => <LandingPage/>} />
            <Route exact path={'/blogs'} render={() => <RouteBlogs/>} />
            <Route exact path={'/users'} render={() => <RouteUsers/>} />
            <Route exact path={'/about'} render={() => <About/>} />
            <Route exact path={'/login'} render={() => props.loggedInUser?<LandingPage/>: <RouteLogin/>} />
            <Route exact path={'/signup'} render={() => props.loggedInUser?<LandingPage/> :<RouteSignup/>} />
            <Route exact path={'/blogs/:id'} render={({match}) => <RoutesOneBlog blog={findBlogById(match.params.id)}/>}/>
            <Route exact path={'/users/:id'} render={({match}) => <RoutesOneUser user={findUserById(match.params.id)}/>}/>
            <Route exact path={'/blogs/create/newBlog'} render={() => <RouteCreateBlog/>}/>
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