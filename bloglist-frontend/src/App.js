import React, {useEffect} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {ac_setLoggedInUserFromLS} from "./reducers/loggedInUserReducer";
import {ac_InitBlogs} from "./reducers/blogsReducer";
import {ac_initUsers} from "./reducers/usersReducer";
import {connect} from 'react-redux';
import LandingPage from "./components/r-home/LandingPage";
import RouteBlogs from "./components/r-blogs/r-blogs";
import RouteUsers from "./components/r-users/r-users";
import About from "./components/r-about/r-about";
import RouteLogin from "./components/r-login/r-login";
import RouteSignup from "./components/r-signup/r-signup";
import RoutesOneBlog from "./components/r-blogs:id/r-blogs:id";
import RoutesOneUser from "./components/r-users:id/r-users:id";
import RouteCreateBlog from "./components/r-createBlog/r-createBlog";
import {ac_initPageViews} from "./reducers/pageViewsReducer";

const App = (props) => {

    useEffect(() => {
        const alreadyLoggedInUser = window.localStorage.getItem('token');

        if (alreadyLoggedInUser) {
            let parsed = JSON.parse(alreadyLoggedInUser);
            props.setLoggedInUser(parsed);
        }

        props.initUsers();
        props.initBlogs();
        props.initPageViews();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [null]);

    const findUserById = id => props.users.find(user => user.id === id);
    const findBlogById = id => props.blogs.find(blog => blog.id === id);

    return (
        <Router>
            <Route exact path={'/'} render={() => <LandingPage/>}/>
            <Route exact path={'/home'} render={() => <LandingPage/>}/>
            <Route exact path={'/blogs'} render={() => <RouteBlogs/>}/>
            <Route exact path={'/users'} render={() => <RouteUsers/>}/>
            <Route exact path={'/about'} render={() => <About/>}/>
            <Route exact path={'/login'} render={() => props.loggedInUser ? <LandingPage/> : <RouteLogin/>}/>
            <Route exact path={'/signup'} render={() => props.loggedInUser ? <LandingPage/> : <RouteSignup/>}/>
            <Route exact path={'/blogs/:id'}
                   render={({match}) => <RoutesOneBlog blog={findBlogById(match.params.id)}/>}/>
            <Route exact path={'/users/:id'}
                   render={({match}) => <RoutesOneUser user={findUserById(match.params.id)}/>}/>
            <Route exact path={'/blogs/create/newBlog'} render={() => <RouteCreateBlog/>}/>
        </Router>
    )
};

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs,
        loggedInUser: state.loggedInUser,
        users: state.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setLoggedInUser: (data) => dispatch(ac_setLoggedInUserFromLS(data)),
        initBlogs: () => dispatch(ac_InitBlogs()),
        initUsers: () => dispatch(ac_initUsers()),
        initPageViews: () => dispatch(ac_initPageViews())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);